import * as tiktokSchema from "tiktok-live-proto/v2";
import {MessageFns} from "tiktok-live-proto/v2";
import {ProtoMessageFetchResult, User, WebcastBarrageMessage, WebcastPushFrame} from "tiktok-live-proto/v3";
import {SchemaVersion} from "./schemas";
import {ClientCloseCode, WebSocketFeatureFlagsType} from "../client";

/** FUNCTION: Extract type T from MessageFns<T> **/
type ExtractType<T> = T extends MessageFns<infer U> ? U : never;

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

/** MAP: Message names to the interface they decode into. In tiktok-live-proto the
 *  codec const and the interface share the same identifier, so the message name
 *  IS the schema key — no suffix-stripping needed. **/
export type WebcastMessageMap = { [K in FilteredKeys]: RawExtractedTypes[K]; };

/** UNION: All message values (i.e. the Protobuf Message interfaces) **/
export type WebcastMessage = WebcastMessageMap[keyof WebcastMessageMap];

/** UNION: All message names **/
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

export type SuperFanEvent = {
  type: 'superFan',
  data: WebcastBarrageMessage
}

export type DecodeErrorEvent = {
  type: 'decodeError',
  data: {
    message: string
  }
}

export type TikTokConnectEvent = {
  type: 'tiktok.connect',
  data: {
    agentId: string
  }
}

export type TikTokDisconnectEvent = {
  type: 'tiktok.disconnect',
  data: {
    reason: ClientCloseCode
  }
}

export type RoomStatusEvent = {
  type: 'room.status',
  data: {
    state: 'connecting' | 'connected' | 'reconnecting' | 'offline' | 'ended' | 'error'
    ownerInstanceId: string
    roomId?: string
    attempt?: number
    code?: number
    message?: string
    terminal?: boolean
  }
}

export type TikTokRawBytes = {
  type: 'tiktok.rawBytes',
  data: {
    raw: string
  }
}

export type WorkerInfoEvent = {
  type: 'workerInfo',
  data: {
    webSocketId: string;
    schemaVersion: SchemaVersion;
    features: WebSocketFeatureFlagsType;
    isLoggedIn: boolean;
  }
}

export type PresenceRecord = {
  user: Pick<User, 'displayId' | 'nickname' | "avatarLarge">,
  firstSeen: number, // First event where they were seen
  lastSeen: number // Last event where they were seen
}

export type PresenceRegistry = Record<string, PresenceRecord>;

export type SyntheticLeaveMessage = {
  type: 'SyntheticLeaveMessage',
  data: PresenceRecord
}

export type SyntheticJoinMessage = {
  type: 'SyntheticJoinMessage',
  data: PresenceRecord
}

export type CustomData = RoomInfoEvent
    | WorkerInfoEvent
    | SyntheticJoinMessage
    | SyntheticLeaveMessage
    | TikTokConnectEvent
    | TikTokDisconnectEvent
    | RoomStatusEvent
    | SuperFanEvent
    | DecodeErrorEvent
    | TikTokRawBytes;

/** UNION: All possible pairs of type to the data the type represents **/
export type DecodedData = {
  [K in WebcastMessageName]: {
    type: K;
    data: WebcastMessageMap[K]
  }
}[WebcastMessageName] | CustomData;


export type DecodedWebcastPushFrame = WebcastPushFrame & {
  protoMessageFetchResult?: ProtoMessageFetchResult;
}

export type RequiredDecodedWebcastPushFrame = Omit<DecodedWebcastPushFrame, 'protoMessageFetchResult'> & {
  protoMessageFetchResult: ProtoMessageFetchResult;
};
