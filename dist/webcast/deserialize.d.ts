import * as tiktokSchema from "../webcast/schemas/tiktok-schema-v2";
import { CommonMessageData, MessageFns, ProtoMessageFetchResult, WebcastPushFrame } from "../webcast/schemas/tiktok-schema-v2";
import { SchemaVersion } from "../webcast/schemas";
/** FUNCTION: Extract type T from MessageFns<T> **/
type ExtractType<T> = T extends MessageFns<infer U> ? U : never;
/** FUNCTION: Strips the 'Decoder' suffix from a string **/
type StripDecoderSuffix<T> = T extends `${infer Name}Decoder` ? Name : never;
/** FUNCTION: Extract only those message types that have a 'common' property **/
type FilterMessagesWithCommon<T> = {
    [K in keyof T]: T[K] extends {
        common: CommonMessageData;
    } ? K : never;
}[keyof T];
/** MAP: Property names in tiktokSchema file to types **/
type TikTokSchema = typeof tiktokSchema;
/** MAP: Property names to T from ExtractType<T>. Includes 'nevers' that need to be filtered out  **/
type RawExtractedTypes = {
    [K in keyof TikTokSchema]: ExtractType<TikTokSchema[K]>;
};
/** UNION: All keys in RawExtractedTypes that DON'T result in a "never" **/
type FilteredKeys = {
    [K in keyof RawExtractedTypes]: RawExtractedTypes[K] extends never ? never : K;
}[keyof RawExtractedTypes];
/** MAP: Names of decoders to the type T they decode **/
export type WebcastDecoderMap = {
    [K in FilteredKeys]: RawExtractedTypes[K];
};
/** UNION: All decoder values (i.e. the Protobuf Message interfaces they decode into) **/
export type WebcastMessage = WebcastDecoderMap[keyof WebcastDecoderMap];
/** UNION: All decoder names **/
export type WebcastDecoderName = keyof WebcastDecoderMap;
/** MAP: Names of T to the type T **/
export type WebcastMessageMap = {
    [K in keyof WebcastDecoderMap as StripDecoderSuffix<K>]: WebcastDecoderMap[K];
};
/** UNION: All type names T **/
export type WebcastMessageName = keyof WebcastMessageMap;
/** MAP: Only those messages with a 'common' property **/
export type WebcastEventMap = {
    [K in FilterMessagesWithCommon<WebcastMessageMap>]: WebcastMessageMap[K];
};
/** UNION: Names of ONLY Event messages (i.e. Top-Level messages) **/
export type WebcastEventName = keyof WebcastEventMap;
/** UNION: Values of ONLY Event messages **/
export type WebcastEvent = WebcastEventMap[keyof WebcastEventMap];
export type RoomInfoEvent = {
    type: 'roomInfo';
    data: Record<string, any>;
};
export type WorkerInfoEvent = {
    type: 'workerInfo';
    data: {
        webSocketId: string;
        agentId: string;
        schemaVersion: SchemaVersion;
    };
};
export type CustomData = RoomInfoEvent | WorkerInfoEvent;
/** UNION: All possible pairs of type to the data the type represents **/
export type DecodedData = {
    [K in WebcastMessageName]: {
        type: K;
        data: WebcastMessageMap[K];
    };
}[WebcastMessageName] | CustomData;
export declare class NoSchemaFoundError extends Error {
    constructor(message: string);
}
/**
 * Deserialize any message
 *
 * @param protoName Name of the proto to deserialize
 * @param protoBinary Binary for the deserialized proto
 * @param protoVersion Version of the proto schema to use
 */
export declare function deserializeMessage<T extends WebcastMessageName>(protoName: T, protoBinary: Uint8Array, protoVersion: SchemaVersion): WebcastMessageMap[T];
export type DecodedWebcastPushFrame = WebcastPushFrame & {
    protoMessageFetchResult?: ProtoMessageFetchResult;
};
/**
 * Deserialize a WebSocket message into a DecodedWebcastPushFrame
 *
 * @param protoBinary Binary message received from the WebSocket
 * @param protoSchemaVersion Version of the schema to use when deserializing nested messages
 */
export declare function deserializeWebSocketMessage(protoBinary: Uint8Array, protoSchemaVersion: SchemaVersion): DecodedWebcastPushFrame;
export {};
//# sourceMappingURL=deserialize.d.ts.map