import {WebSocketOptions} from "./types";

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
 * Creates a WebSocket URL with query parameters based on the provided options.
 *
 * @param options {WebSocketOptions} The options to include in the WebSocket URL
 */
export function createWebSocketUrl(options: WebSocketOptions): string {
  const flatParams = flattenObject(options);
  const queryString = new URLSearchParams(flatParams).toString();
  return `${BASE_URL}?${queryString}`;
}

export function normalizeUniqueId(uniqueId: string) {

  // Support full URI
  uniqueId = uniqueId.replace('https://www.tiktok.com/', '');
  uniqueId = uniqueId.replace('/live', '');
  uniqueId = uniqueId.replace('@', '');
  uniqueId = uniqueId.trim();
  return uniqueId;
}

