import {DecodedData} from "./webcast/schemas";

declare module "tiktok-live-proto/v2" {

  interface BaseProtoMessage {
    decodedData?: DecodedData;
    decodedDataError?: Error;
  }

}

export {};
