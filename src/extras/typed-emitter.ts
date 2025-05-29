import {WebcastEventName, WebcastMessageMap} from "@/webcast";
import EventEmitter from "eventemitter3";

/** An event-map type for the typed-emitter **/
export type TypedEmitterEventMap = { [K in WebcastEventName]: (event: WebcastMessageMap[K]) => void; }

export class WebcastEventEmitter extends EventEmitter<TypedEmitterEventMap> {
}

