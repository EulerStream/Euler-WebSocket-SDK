import {DecodedData} from "./webcast";

/** OVERRIDE MODULE: Extend BaseProtoMessage with decodedData property **/
declare module "./webcast/schemas/tiktok-schema-v2" {

  interface BaseProtoMessage {
    decodedData?: DecodedData;
  }

}

export {};
