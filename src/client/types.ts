import {z} from "zod";
import {DecodedData, SchemaVersion} from "../webcast";
import {coerceBoolean, coerceNumber} from "../extras/zod-extra";

export enum ClientCloseCode {

  /**
   * Error updating presence on connect, or upstream error on connect in the proxy.
   */
  INTERNAL_SERVER_ERROR = 1011,

  /**
   * TikTok closed the connected unexpectedly.
   */
  TIKTOK_CLOSED_CONNECTION = 4500,

  /**
   * The account has too many connections.
   */
  TOO_MANY_CONNECTIONS = 4429,

  /**
   * The client provided invalid options, such as an invalid uniqueId or JWT key.
   */
  INVALID_OPTIONS = 4401,

  /**
   * The requested streamer is not live.
   */
  NOT_LIVE = 4404,

  /**
   * The TikTok stream ended.
   */
  STREAM_END = 4005,

  /**
   * There were no messages in the timeout period, the WebSocket was assumed dead and closed.
   */
  NO_MESSAGES_TIMEOUT = 4006,
}

// Short descriptions that can be sent over WebSocket close reason
export const CloseMessageMap: Record<ClientCloseCode, string> = {
  [ClientCloseCode.INTERNAL_SERVER_ERROR]: "Internal server error",
  [ClientCloseCode.TIKTOK_CLOSED_CONNECTION]: "TikTok closed the connection unexpectedly",
  [ClientCloseCode.TOO_MANY_CONNECTIONS]: "Too many concurrent connections",
  [ClientCloseCode.INVALID_OPTIONS]: "Invalid options provided",
  [ClientCloseCode.NOT_LIVE]: "Streamer is not live",
  [ClientCloseCode.STREAM_END]: "TikTok stream ended",
  [ClientCloseCode.NO_MESSAGES_TIMEOUT]: "No messages received in timeout period, closing WebSocket",
}

export const WebSocketFeatureFlags = z.object({

  /**
   * When enabled, the client will bundle multiple messages into a single event. This is more efficient
   * than sending messages individually.
   */
  bundleEvents: coerceBoolean({default: true}),

  /**
   * When enabled, the client will act as a pass-through proxy for raw messages. You will lose out on
   * additional features like presence messages, but this will fit nicely into existing libraries.
   */
  rawMessages: coerceBoolean({default: false}),

  /**
   * Whether to normalize uniqueIds in URL format, @uniqueId format, etc., or treat them as-is.
   */
  normalizeUniqueId: coerceBoolean({default: true}),

  /**
   * When enabled, the client will calculate presence information for users in the room.
   * This enables us to give custom SyntheticJoinMessage and SyntheticLeaveMessage, a full presence system.
   */
  syntheticPresence: coerceBoolean({default: true}),

  /**
   * Configures how long a user must be inactive before we send a SyntheticLeaveMessage.
   */
  syntheticPresenceLeaveAfter: coerceNumber({default: 300, min: 60, max: 3600}),

  /**
   * Configures how long we can wait with NO messages coming from TikTok before we assume the WebSocket
   * is dead and close it.
   */
  closeInactiveWebSocketAfter: coerceNumber({default: 60, min: 30, max: 3600}),

  /**
   * The TikTok protobuf schema version to use for decoding messages.
   */
  schemaVersion: z.nativeEnum(SchemaVersion).default(SchemaVersion.v1),

});

export const WebSocketOptionsSchema = z.object({
  uniqueId: z.string(),
  jwtKey: z.string().optional().nullable(),
  apiKey: z.string().optional().nullable(),
  features: WebSocketFeatureFlags.default({})
});

export type ParsedWebSocketOptions = Omit<z.infer<typeof WebSocketOptionsSchema>, 'features'> & {
  features: WebSocketFeatureFlags
};
export type WebSocketFeatureFlags = z.infer<typeof WebSocketFeatureFlags>;
export type WebSocketOptions = Omit<ParsedWebSocketOptions, 'features'> & { features?: Partial<WebSocketFeatureFlags> };

export type ClientMessageBundle = {
  timestamp: number,
  messages: DecodedData[]
}


