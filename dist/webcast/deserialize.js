"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeWebSocketMessage = exports.deserializeMessage = exports.NoSchemaFoundError = void 0;
const tiktok_schema_v2_1 = require("../webcast/schemas/tiktok-schema-v2");
const schemas_1 = require("../webcast/schemas");
__exportStar(require("../webcast/schemas/tiktok-schema-v2"), exports);
class NoSchemaFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "NoSchemaFoundError";
    }
}
exports.NoSchemaFoundError = NoSchemaFoundError;
/**
 * Deserialize ProtoMessageFetchResult and all nested messages
 *
 * @param protoBinary Binary
 * @param protoSchemaVersion Version to use when deserializing nested messages
 */
function deserializeProtoMessageFetchResult(protoBinary, protoSchemaVersion) {
    // Always pull from Schema V2 for ProtoMessageFetchResult
    const protoMessageFetchResult = schemas_1.WebcastSchemas[schemas_1.SchemaVersion.v2]
        .ProtoMessageFetchResultDecoder
        .decode(protoBinary);
    const selectedSchema = schemas_1.WebcastSchemas[protoSchemaVersion];
    for (const message of protoMessageFetchResult.messages || []) {
        // Skip it if it's not in the schema
        if (!selectedSchema[`${message.type}Decoder`]) {
            continue;
        }
        // Deserialize the message
        try {
            const messageType = message.type;
            const deserializedMessage = deserializeMessage(messageType, message.payload, protoSchemaVersion);
            message.decodedData = { type: messageType, data: deserializedMessage };
        }
        catch (ex) {
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
function deserializeMessage(protoName, protoBinary, protoVersion) {
    // These have nested message binaries in them, so we have a custom decoder ^.^
    if (protoName === "ProtoMessageFetchResult") {
        return deserializeProtoMessageFetchResult(protoBinary, protoVersion);
    }
    // Get the decoder name
    const decoderName = `${protoName}Decoder`;
    const decoderFn = schemas_1.WebcastSchemas[protoVersion][decoderName];
    if (!decoderFn) {
        throw new NoSchemaFoundError(`Invalid schema name: ${protoName}, not found in the Protobuf schema.`);
    }
    return decoderFn.decode(protoBinary);
}
exports.deserializeMessage = deserializeMessage;
/**
 * Deserialize a WebSocket message into a DecodedWebcastPushFrame
 *
 * @param protoBinary Binary message received from the WebSocket
 * @param protoSchemaVersion Version of the schema to use when deserializing nested messages
 */
function deserializeWebSocketMessage(protoBinary, protoSchemaVersion) {
    // Websocket messages are in a container which contains additional data
    // Message type 'msg' represents a normal ProtoMessageFetchResult
    const rawWebcastWebSocketMessage = tiktok_schema_v2_1.WebcastPushFrameDecoder.decode(protoBinary); // Always with v2
    let protoMessageFetchResult = undefined;
    if (rawWebcastWebSocketMessage.type === 'msg') {
        protoMessageFetchResult = deserializeMessage("ProtoMessageFetchResult", rawWebcastWebSocketMessage.binary, protoSchemaVersion);
    }
    return {
        ...rawWebcastWebSocketMessage,
        protoMessageFetchResult
    };
}
exports.deserializeWebSocketMessage = deserializeWebSocketMessage;
//# sourceMappingURL=deserialize.js.map