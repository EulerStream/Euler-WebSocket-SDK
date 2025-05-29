import * as tikTokSchemaV2 from "./tiktok-schema-v2";
import * as tikTokSchemaV1 from "./tiktok-schema-v1";

export enum SchemaVersion {
  v1 = 'v1',
  v2 = 'v2'
}

export const WebcastSchemas = {
  [SchemaVersion.v1]: tikTokSchemaV1,
  [SchemaVersion.v2]: tikTokSchemaV2
}



