import {z} from "zod";
import {SchemaVersion} from "../webcast/schemas";
import {coerceBoolean, coerceNumber} from "../extras/zod-extra";
import {DecodedData} from "../webcast/proto-utils";
import {ClientCloseCode} from "./schemas";


// Short descriptions that can be sent over WebSocket close reason
export const CloseMessageMap: Record<ClientCloseCode, string> = {
  [ClientCloseCode.UNRECOGNIZED]: "Unrecognized",
  [ClientCloseCode.CLIENT_CLOSE_CODE_UNSPECIFIED]: "Unspecified",
  [ClientCloseCode.CLIENT_CLOSE_CODE_ROOM_INFO_FETCH_ERROR]: "Error fetching /webcast/room_info",
  [ClientCloseCode.CLIENT_CLOSE_CODE_WEBCAST_FETCH_ERROR]: "Error fetching /webcast/fetch",
  [ClientCloseCode.CLIENT_CLOSE_CODE_INVALID_AUTH]: "Invalid auth",
  [ClientCloseCode.CLIENT_CLOSE_CODE_MAX_LIFETIME_EXCEEDED]: "Max lifetime exceeded",
  [ClientCloseCode.CLIENT_CLOSE_CODE_NO_PERMISSION]: "No permission",
  [ClientCloseCode.CLIENT_CLOSE_CODE_INTERNAL_SERVER_ERROR]: "Internal server error",
  [ClientCloseCode.CLIENT_CLOSE_CODE_TIKTOK_CLOSED_CONNECTION]: "TikTok closed the connection unexpectedly",
  [ClientCloseCode.CLIENT_CLOSE_CODE_TOO_MANY_CONNECTIONS]: "Too many concurrent connections",
  [ClientCloseCode.CLIENT_CLOSE_CODE_INVALID_OPTIONS]: "Invalid context provided",
  [ClientCloseCode.CLIENT_CLOSE_CODE_NOT_LIVE]: "Streamer is not live",
  [ClientCloseCode.CLIENT_CLOSE_CODE_STREAM_END]: "TikTok stream ended",
  [ClientCloseCode.CLIENT_CLOSE_CODE_NO_MESSAGES_TIMEOUT]: "No messages received in timeout period, closing WebSocket",
  [ClientCloseCode.CLIENT_CLOSE_CODE_NORMAL]: "Normal closure"
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
   * The TikTok protobuf schema version to use for decoding messages.
   */
  schemaVersion: z.nativeEnum(SchemaVersion).default(SchemaVersion.v2),

  /**
   * Whether to add a "raw" entry including base64 encoded Protobuf with the JSON
   */
  includeRawBytes: coerceBoolean({default: false}),

  /**
   * Whether to use the Enterprise Sign API infrastructure (recommended)
   */
  useEnterpriseApi: coerceBoolean({default: false}),

  /**
   * Select the platform to connect with
   */
  webcastPlatform: z.enum(['mobile', 'web']).default('web'),

  /**
   * Whether to attach the WebSocket to the peer transcription stream.
   */
  enableTranscription: coerceBoolean({default: false}),

});

export const WebSocketOptionsSchema = z.object({
  uniqueId: z.string(),
  jwtKey: z.string().optional().nullable(),
  apiKey: z.string().optional().nullable(),
  features: WebSocketFeatureFlags.default({}),
  sessionId: z.string().optional().nullable(),
  ttTargetIdc: z.string().optional().nullable()
});

export type ParsedWebSocketOptions = Omit<z.infer<typeof WebSocketOptionsSchema>, 'features'> & {
  features: WebSocketFeatureFlagsType
};
export type WebSocketFeatureFlagsType = z.infer<typeof WebSocketFeatureFlags>;
export type WebSocketOptions = Omit<ParsedWebSocketOptions, 'features'> & {
  features?: Partial<WebSocketFeatureFlagsType>
};

export type ClientMessageBundle = {
  timestamp: number,
  messages: DecodedData[]
}

