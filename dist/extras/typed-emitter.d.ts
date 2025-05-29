import { WebcastEventName, WebcastMessageMap } from "../webcast";
import EventEmitter from "eventemitter3";
/** An event-map type for the typed-emitter **/
type WebcastEventMap = {
    [K in WebcastEventName]: (event: WebcastMessageMap[K]) => void;
};
/** Cross-compatible Node + Browser event emitter for Webcast events **/
export declare class WebcastEventEmitter extends EventEmitter<WebcastEventMap> {
}
/**
 * Pipes WebSocket messages to a typed event emitter.
 * ASSUMPTION: WebSocket messages are not raw, and not bundled.
 *
 * @param ws The WebSocket instance to pipe events from.
 */
export declare function pipeEvents(ws: any): WebcastEventEmitter;
export {};
//# sourceMappingURL=typed-emitter.d.ts.map