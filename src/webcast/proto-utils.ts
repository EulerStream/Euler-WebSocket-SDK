import * as tiktokSchema from "../webcast/schemas/tiktok-schema-v2";
import {
  MessageFns,
  ProtoMessageFetchResult,
  SchemaVersion,
  WebcastPushFrame,
  WebcastPushFrameDecoder,
  WebcastSchemas
} from "./schemas";
import {BinaryWriter} from "@bufbuild/protobuf/wire";


/** FUNCTION: Extract type T from MessageFns<T> **/
type ExtractType<T> = T extends MessageFns<infer U> ? U : never;

/** FUNCTION: Strips the 'Decoder' suffix from a string **/
type StripDecoderSuffix<T> = T extends `${infer Name}Decoder` ? Name : never;

/** FUNCTION: Extract only those message types that have a 'common' property **/
type FilterMessagesWithCommon<T> = { [K in keyof T]: T[K] extends { common: any } ? K : never }[keyof T];

/** MAP: Property names in tiktokSchema file to types **/
type TikTokSchema = typeof tiktokSchema;

/** MAP: Property names to T from ExtractType<T>. Includes 'nevers' that need to be filtered out  **/
type RawExtractedTypes = {
  [K in keyof TikTokSchema]: ExtractType<TikTokSchema[K]>;
};

/** UNION: All keys in RawExtractedTypes that DON'T result in a "never" **/
type FilteredKeys = {
  [K in keyof RawExtractedTypes]:
  RawExtractedTypes[K] extends never ? never : K;
}[keyof RawExtractedTypes];

/** MAP: Names of decoders to the type T they decode **/
export type WebcastDecoderMap = { [K in FilteredKeys]: RawExtractedTypes[K]; };

/** UNION: All decoder values (i.e. the Protobuf Message interfaces they decode into) **/
export type WebcastMessage = WebcastDecoderMap[keyof WebcastDecoderMap];

/** UNION: All decoder names **/
export type WebcastDecoderName = keyof WebcastDecoderMap;

/** MAP: Names of T to the type T **/
export type WebcastMessageMap = { [K in keyof WebcastDecoderMap as StripDecoderSuffix<K>]: WebcastDecoderMap[K] };

/** UNION: All type names T **/
export type WebcastMessageName = keyof WebcastMessageMap;

/** MAP: Only those messages with a 'common' property **/
export type WebcastEventMap = { [K in FilterMessagesWithCommon<WebcastMessageMap>]: WebcastMessageMap[K] };

/** UNION: Names of ONLY Event messages (i.e. Top-Level messages) **/
export type WebcastEventName = keyof WebcastEventMap;

/** UNION: Values of ONLY Event messages **/
export type WebcastEvent = WebcastEventMap[keyof WebcastEventMap];

export type RoomInfoEvent = {
  type: 'roomInfo',
  data: Record<string, any>
}

export type WorkerInfoEvent = {
  type: 'workerInfo',
  data: {
    webSocketId: string;
    agentId: string;
    schemaVersion: SchemaVersion;
    deprecationWarning?: string;
  }
}

export type CustomData = RoomInfoEvent | WorkerInfoEvent;

/** UNION: All possible pairs of type to the data the type represents **/
export type DecodedData = {
  [K in WebcastMessageName]: {
    type: K;
    data: WebcastMessageMap[K]
  }
}[WebcastMessageName] | CustomData;

export class NoSchemaFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NoSchemaFoundError";
  }
}


/**
 * Deserialize ProtoMessageFetchResult and all nested messages
 *
 * @param protoBinary Binary
 * @param protoSchemaVersion Version to use when deserializing nested messages
 */
function deserializeProtoMessageFetchResult(
    protoBinary: Uint8Array,
    protoSchemaVersion: SchemaVersion
): ProtoMessageFetchResult {

  // Always pull from Schema V2 for ProtoMessageFetchResult
  const protoMessageFetchResult = WebcastSchemas[SchemaVersion.v2]
      .ProtoMessageFetchResultDecoder
      .decode(protoBinary);

  const selectedSchema = WebcastSchemas[protoSchemaVersion];

  for (const message of protoMessageFetchResult.messages || []) {

    // Skip it if it's not in the schema
    if (!selectedSchema[`${message.type}Decoder` as keyof typeof selectedSchema]) {
      continue;
    }

    // Deserialize the message
    try {
      const messageType = message.type as WebcastMessageName;
      const deserializedMessage: WebcastMessageMap[typeof messageType] = deserializeMessage(messageType as WebcastMessageName, message.payload, protoSchemaVersion);
      message.decodedData = {type: messageType, data: deserializedMessage} as DecodedData
    } catch (ex) {
      console.info(`Failed to decode message type: ${message.type}`, ex);
    }

  }

  return protoMessageFetchResult;
}

/**
 * Deserialize any message
 *
 * @param protoName Name of the proto to deserialize
 * @param protoBinary Binary for the deserialized proto
 * @param protoVersion Version of the proto schema to use
 */
export function deserializeMessage<T extends WebcastMessageName>(
    protoName: T,
    protoBinary: Uint8Array,
    protoVersion: SchemaVersion
): WebcastMessageMap[T] {

  // These have nested message binaries in them, so we have a custom decoder ^.^
  if (protoName === "ProtoMessageFetchResult") {
    return deserializeProtoMessageFetchResult(protoBinary, protoVersion) as WebcastMessageMap[T]
  }

  // Get the decoder name
  const decoderName: WebcastDecoderName = `${protoName}Decoder`;
  const decoderFn = WebcastSchemas[protoVersion][decoderName as keyof typeof WebcastSchemas[SchemaVersion]] as MessageFns<WebcastMessageMap[T]>;

  if (!decoderFn) {
    throw new NoSchemaFoundError(`Invalid schema name: ${protoName}, not found in the Protobuf schema.`);
  }

  return decoderFn.decode(protoBinary);
}


export type DecodedWebcastPushFrame = WebcastPushFrame & {
  protoMessageFetchResult?: ProtoMessageFetchResult;
}

export type RequiredDecodedWebcastPushFrame = Omit<DecodedWebcastPushFrame, 'protoMessageFetchResult'> & {
  protoMessageFetchResult: ProtoMessageFetchResult;
};


/**
 * Deserialize a WebSocket message into a DecodedWebcastPushFrame
 *
 * @param protoBinary Binary message received from the WebSocket
 * @param protoSchemaVersion Version of the schema to use when deserializing nested messages
 */
export function deserializeWebSocketMessage(protoBinary: Uint8Array, protoSchemaVersion: SchemaVersion): DecodedWebcastPushFrame {

  // Websocket messages are in a container which contains additional data
  // Message type 'msg' represents a normal ProtoMessageFetchResult
  const rawWebcastWebSocketMessage = WebcastPushFrameDecoder.decode(protoBinary); // Always with v2
  let protoMessageFetchResult: ProtoMessageFetchResult | undefined = undefined;

  if (rawWebcastWebSocketMessage.payloadEncoding === 'pb' && rawWebcastWebSocketMessage.payload) {
    protoMessageFetchResult = deserializeMessage(
        'ProtoMessageFetchResult',
        rawWebcastWebSocketMessage.payload,
        protoSchemaVersion
    );
  }

  const decodedContainer: DecodedWebcastPushFrame = rawWebcastWebSocketMessage;
  decodedContainer.protoMessageFetchResult = protoMessageFetchResult;
  return decodedContainer;
}

export function createBaseWebcastPushFrame(overrides: Partial<WebcastPushFrame>): BinaryWriter {
  // Basically, we need to set it to "0" so that it DOES NOT send the field(s)
  const undefinedNum: string = '0';

  overrides = Object.fromEntries(
      Object.entries(overrides).filter(([_, value]) => value !== undefined)
  );

  return WebcastPushFrameDecoder.encode(
      {
        seqId: undefinedNum,
        logId: undefinedNum,
        payloadEncoding: 'pb',
        payloadType: 'msg',
        payload: new Uint8Array(),
        service: undefinedNum,
        method: undefinedNum,
        headers: {},
        ...overrides
      }
  );

}
