import * as tikTokSchemaV1 from "tiktok-live-proto/v1";
import * as tikTokSchemaV2 from "tiktok-live-proto/v2";

export enum SchemaVersion {
  v1 = 'v1',
  v2 = 'v2'
}

export const WebcastSchemas = {
  [SchemaVersion.v1]: tikTokSchemaV1,
  [SchemaVersion.v2]: tikTokSchemaV2
}

export * from './proto-utils';
export * from 'tiktok-live-proto/v2';
