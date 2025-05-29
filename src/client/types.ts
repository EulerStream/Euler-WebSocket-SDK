import {z} from "zod";
import {DecodedData, SchemaVersion} from "../webcast";

export enum ClientCloseCode {

  // Standard Codes
  INTERNAL_SERVER_ERROR = 1011,
  NORMAL = 1000,

  // Custom Codes (Must be 4000 to 4999)
  TIKTOK_CLOSED_CONNECTION = 4500,
  TOO_MANY_CONNECTIONS = 4429,
  INVALID_OPTIONS = 4401,
  NOT_LIVE = 4404,
  STREAM_END = 4005
}

const coerceBoolean = z
    .enum(['true', 'false', '1', '0'])
    .transform(val => val === 'true' || val === '1');

export const WebSocketFeatureFlags = z.object({
  bundleEvents: coerceBoolean.default("true"),
  rawMessages: coerceBoolean.default("false"),
});

export const WebSocketOptionsSchema = z.object({
  uniqueId: z.string(),
  jwtKey: z.string().optional().nullable(),
  apiKey: z.string().optional().nullable(),
  schemaVersion: z.nativeEnum(SchemaVersion).default(SchemaVersion.v1),
  features: WebSocketFeatureFlags.default({})
});

type BaseWebSocketOptions = z.infer<typeof WebSocketOptionsSchema>;
export type WebSocketFeatureFlags = z.infer<typeof WebSocketFeatureFlags>;
export type WebSocketOptions = Omit<BaseWebSocketOptions, 'features'> & { features?: Partial<WebSocketFeatureFlags> };

export type ClientMessageBundle = {
  timestamp: number,
  messages: DecodedData[]
}
