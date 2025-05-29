"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketOptionsSchema = exports.WebSocketFeatureFlags = exports.ClientCloseCode = void 0;
const zod_1 = require("zod");
const webcast_1 = require("../webcast");
var ClientCloseCode;
(function (ClientCloseCode) {
    // Standard Codes
    ClientCloseCode[ClientCloseCode["INTERNAL_SERVER_ERROR"] = 1011] = "INTERNAL_SERVER_ERROR";
    ClientCloseCode[ClientCloseCode["NORMAL"] = 1000] = "NORMAL";
    // Custom Codes (Must be 4000 to 4999)
    ClientCloseCode[ClientCloseCode["TIKTOK_CLOSED_CONNECTION"] = 4500] = "TIKTOK_CLOSED_CONNECTION";
    ClientCloseCode[ClientCloseCode["TOO_MANY_CONNECTIONS"] = 4429] = "TOO_MANY_CONNECTIONS";
    ClientCloseCode[ClientCloseCode["INVALID_OPTIONS"] = 4401] = "INVALID_OPTIONS";
    ClientCloseCode[ClientCloseCode["NOT_LIVE"] = 4404] = "NOT_LIVE";
    ClientCloseCode[ClientCloseCode["STREAM_END"] = 4005] = "STREAM_END";
})(ClientCloseCode = exports.ClientCloseCode || (exports.ClientCloseCode = {}));
const coerceBoolean = zod_1.z
    .enum(['true', 'false', '1', '0'])
    .transform(val => val === 'true' || val === '1');
exports.WebSocketFeatureFlags = zod_1.z.object({
    bundleEvents: coerceBoolean.default("true"),
    rawMessages: coerceBoolean.default("false"),
});
exports.WebSocketOptionsSchema = zod_1.z.object({
    uniqueId: zod_1.z.string(),
    jwtKey: zod_1.z.string().optional().nullable(),
    apiKey: zod_1.z.string().optional().nullable(),
    schemaVersion: zod_1.z.nativeEnum(webcast_1.SchemaVersion).default(webcast_1.SchemaVersion.v1),
    features: exports.WebSocketFeatureFlags.default({})
});
//# sourceMappingURL=types.js.map