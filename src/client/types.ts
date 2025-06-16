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
  STREAM_END = 4005,
  NO_MESSAGES_TIMEOUT = 4006,
}

const coerceBoolean = z
    .enum(['true', 'false', '1', '0'])
    .transform(val => val === 'true' || val === '1');

const coerceNumber = z
    .string()
    .transform(val => {
      const num = Number(val);
      if (isNaN(num)) {
        throw new Error(`Invalid number: ${val}`);
      }
      return num;
    });

export const WebSocketFeatureFlags = z.object({
  bundleEvents: coerceBoolean.default("true"),
  rawMessages: coerceBoolean.default("false"),
  normalizeUniqueId: coerceBoolean.default("true"),

  // Synthetic leave & join messages
  syntheticPresence: coerceBoolean.default("true"),
  syntheticPresenceLeaveAfter: coerceNumber.default("5"),

  // Number of seconds of no TikTok messages before we close the WebSocket
  // Sort of like a timeout for inactivity
  closeInactiveWebSocketAfter: coerceNumber.default("300"),

});

export const WebSocketOptionsSchema = z.object({
  uniqueId: z.string(),
  jwtKey: z.string().optional().nullable(),
  apiKey: z.string().optional().nullable(),
  schemaVersion: z.nativeEnum(SchemaVersion).default(SchemaVersion.v1),
  features: WebSocketFeatureFlags.default({})
});

export type ParsedWebSocketOptions = Omit<z.infer<typeof WebSocketOptionsSchema>, 'features'> & { features: WebSocketFeatureFlags };
export type WebSocketFeatureFlags = z.infer<typeof WebSocketFeatureFlags>;
export type WebSocketOptions = Omit<ParsedWebSocketOptions, 'features'> & { features?: Partial<WebSocketFeatureFlags> };

export type ClientMessageBundle = {
  timestamp: number,
  messages: DecodedData[]
}


