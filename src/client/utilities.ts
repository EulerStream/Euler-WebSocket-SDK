import {SchemaVersion} from "../webcast/schemas";
import {
  WebcastPlatform,
  WebcastSchemaVersion,
  type WebSocketOptions as SchemaWebSocketOptions,
} from "./schemas";
import {
  WebSocketOptionsSchema,
  type WebSocketOptions,
  type WebSocketFeatureFlagsType,
} from "./types";

const isNode = typeof process !== "undefined" && process?.env != null;

export const BASE_URL: string = isNode
    ? process.env.EULER_WS_URL || "wss://ws.eulerstream.com"
    : "wss://ws.eulerstream.com";

/**
 * Given an input object, this function flattens it into a single-level object with dot-separated keys.
 *
 * @param obj The input object to flatten
 * @param prefix The prefix to prepend to each key (used for recursion); i.e. the current key path
 * @param result The result object that accumulates the flattened key-value pairs
 */
function flattenObject(obj: Record<string, any>, prefix: string = "", result: Record<string, string> = {}): Record<string, string> {
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      flattenObject(value, fullKey, result);
    } else if (value !== undefined) {
      result[fullKey] = String(value);
    }
  }
  return result;
}

/**
 * Creates a WebSocket URL with query parameters based on the provided context.
 *
 * @param options {WebSocketOptions} The context to include in the WebSocket URL
 */
export function createWebSocketUrl(options: WebSocketOptions): string {
  const flatParams = flattenObject(options);
  const queryString = new URLSearchParams(flatParams).toString();
  return `${BASE_URL}?${queryString}`;
}

const schemaVersionMap: Record<SchemaVersion, WebcastSchemaVersion> = {
  [SchemaVersion.v1]: WebcastSchemaVersion.SCHEMA_VERSION_V1,
  [SchemaVersion.v2]: WebcastSchemaVersion.SCHEMA_VERSION_V2,
  [SchemaVersion.v3]: WebcastSchemaVersion.SCHEMA_VERSION_V3,
};

const webcastPlatformMap: Record<WebSocketFeatureFlagsType['webcastPlatform'], WebcastPlatform> = {
  web: WebcastPlatform.WEBCAST_PLATFORM_WEB,
  mobile: WebcastPlatform.WEBCAST_PLATFORM_MOBILE,
};

const DEFAULT_TT_TARGET_IDC = 'useast1a';
const booleanFeatureKeys = [
  'bundleEvents',
  'rawMessages',
  'normalizeUniqueId',
  'includeRawBytes',
  'useEnterpriseApi',
  'enableTranscription',
] as const;

function present(value: string | null | undefined): string | undefined {
  return value || undefined;
}

function normalizeOptionsForSchemaParse(options: WebSocketOptions): unknown {
  if (!options.features) return options;

  const features: Record<string, unknown> = {...options.features};
  for (const key of booleanFeatureKeys) {
    if (typeof features[key] === 'boolean') {
      features[key] = String(features[key]);
    }
  }

  return {...options, features};
}

function createSessionCookieHeader(
  sessionId: string | null | undefined,
  ttTargetIdc: string | null | undefined,
): string | undefined {
  const session = present(sessionId);
  if (!session) return undefined;

  return [
    `sessionid=${session}`,
    `tt-target-idc=${present(ttTargetIdc) ?? DEFAULT_TT_TARGET_IDC}`,
  ].join('; ');
}

/**
 * Converts the SDK's public WebSocket options contract into the generated
 * public protobuf schema shape used by gateway/server control planes.
 */
export function toWebSocketSchemaOptions(options: WebSocketOptions): SchemaWebSocketOptions {
  const parsed = WebSocketOptionsSchema.parse(normalizeOptionsForSchemaParse(options));
  const {features} = parsed;

  return {
    uniqueId: parsed.uniqueId,
    jwtKey: present(parsed.jwtKey),
    apiKey: present(parsed.apiKey),
    xCookieHeader: createSessionCookieHeader(parsed.sessionId, parsed.ttTargetIdc),
    xOauthToken: undefined,
    features: {
      normalizeUniqueId: features.normalizeUniqueId,
      useEnterpriseApi: features.useEnterpriseApi,
      webcastPlatform: webcastPlatformMap[features.webcastPlatform],
      enableTranscription: features.enableTranscription,
    },
    flags: {
      bundleEvents: features.bundleEvents,
      schemaVersion: schemaVersionMap[features.schemaVersion],
      rawMessages: features.rawMessages,
      includeRawBytes: features.includeRawBytes,
    },
  };
}

export function normalizeUniqueId(uniqueId: string) {

  // Support full URI
  uniqueId = uniqueId.replace('https://www.tiktok.com/', '');
  uniqueId = uniqueId.replace('/live', '');
  uniqueId = uniqueId.replace('@', '');
  uniqueId = uniqueId.trim();
  return uniqueId;
}
