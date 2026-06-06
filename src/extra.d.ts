import {DecodedData} from "./webcast/schemas";

declare module "tiktok-live-proto-full-types/v3" {

  interface BaseProtoMessage {
    decodedData?: DecodedData;
    decodedDataError?: Error;
  }

}

export {};
