import EventEmitter from "eventemitter3";
import { WebcastEventName, WebcastMessageMap } from "../webcast";
/** An event-map type for the typed-emitter **/
export type TypedEmitterEventMap = {
    [K in WebcastEventName]: (event: WebcastMessageMap[K]) => void;
};
export declare class WebcastEventEmitter extends EventEmitter<TypedEmitterEventMap> {
}
//# sourceMappingURL=typed-emitter.d.ts.map