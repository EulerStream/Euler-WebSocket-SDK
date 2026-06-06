import * as tikTokSchemaV1 from "tiktok-live-proto-full-types/v1";
import * as tikTokSchemaV2 from "tiktok-live-proto-full-types/v2";
import * as tikTokSchemaV3 from "tiktok-live-proto-full-types/v3";
import {WebcastSchemaVersion} from "../client/schemas";

export enum SchemaVersion {
  v1 = 'v1',
  v2 = 'v2',
  v3 = 'v3'
}

// Map the internal proto to public-facing SDK language
export const SchemaVersionProtoMap: Record<WebcastSchemaVersion, SchemaVersion> = {
  [WebcastSchemaVersion.SCHEMA_VERSION_V1]: SchemaVersion.v1,
  [WebcastSchemaVersion.SCHEMA_VERSION_V2]: SchemaVersion.v2,
  [WebcastSchemaVersion.SCHEMA_VERSION_V3]: SchemaVersion.v3,

  // Fallback
  [WebcastSchemaVersion.SCHEMA_VERSION_UNSPECIFIED]: SchemaVersion.v3,
  [WebcastSchemaVersion.UNRECOGNIZED]: SchemaVersion.v3
}

export const WebcastSchemas = {
  [SchemaVersion.v1]: tikTokSchemaV1,
  [SchemaVersion.v2]: tikTokSchemaV2,
  [SchemaVersion.v3]: tikTokSchemaV3,
}

export * from './proto-utils';
