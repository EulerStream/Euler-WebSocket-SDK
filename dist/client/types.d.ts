import { z } from "zod";
import { DecodedData, SchemaVersion } from "../webcast";
export declare enum ClientCloseCode {
    INTERNAL_SERVER_ERROR = 1011,
    NORMAL = 1000,
    TIKTOK_CLOSED_CONNECTION = 4500,
    TOO_MANY_CONNECTIONS = 4429,
    INVALID_OPTIONS = 4401,
    NOT_LIVE = 4404,
    STREAM_END = 4005
}
export declare const WebSocketFeatureFlags: z.ZodObject<{
    bundleEvents: z.ZodDefault<z.ZodEffects<z.ZodEnum<["true", "false", "1", "0"]>, boolean, "0" | "1" | "false" | "true">>;
    rawMessages: z.ZodDefault<z.ZodEffects<z.ZodEnum<["true", "false", "1", "0"]>, boolean, "0" | "1" | "false" | "true">>;
}, "strip", z.ZodTypeAny, {
    bundleEvents?: boolean;
    rawMessages?: boolean;
}, {
    bundleEvents?: "0" | "1" | "false" | "true";
    rawMessages?: "0" | "1" | "false" | "true";
}>;
export declare const WebSocketOptionsSchema: z.ZodObject<{
    uniqueId: z.ZodString;
    jwtKey: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    apiKey: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    schemaVersion: z.ZodDefault<z.ZodNativeEnum<typeof SchemaVersion>>;
    features: z.ZodDefault<z.ZodObject<{
        bundleEvents: z.ZodDefault<z.ZodEffects<z.ZodEnum<["true", "false", "1", "0"]>, boolean, "0" | "1" | "false" | "true">>;
        rawMessages: z.ZodDefault<z.ZodEffects<z.ZodEnum<["true", "false", "1", "0"]>, boolean, "0" | "1" | "false" | "true">>;
    }, "strip", z.ZodTypeAny, {
        bundleEvents?: boolean;
        rawMessages?: boolean;
    }, {
        bundleEvents?: "0" | "1" | "false" | "true";
        rawMessages?: "0" | "1" | "false" | "true";
    }>>;
}, "strip", z.ZodTypeAny, {
    uniqueId?: string;
    jwtKey?: string;
    apiKey?: string;
    schemaVersion?: SchemaVersion;
    features?: {
        bundleEvents?: boolean;
        rawMessages?: boolean;
    };
}, {
    uniqueId?: string;
    jwtKey?: string;
    apiKey?: string;
    schemaVersion?: SchemaVersion;
    features?: {
        bundleEvents?: "0" | "1" | "false" | "true";
        rawMessages?: "0" | "1" | "false" | "true";
    };
}>;
export type WebSocketOptions = z.infer<typeof WebSocketOptionsSchema>;
export type WebSocketFeatureFlags = z.infer<typeof WebSocketFeatureFlags>;
export type ClientMessageBundle = {
    timestamp: number;
    messages: DecodedData[];
};
//# sourceMappingURL=types.d.ts.map