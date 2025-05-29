/// <reference types="node" />
/// <reference types="node" />
import { WebcastEventName, WebcastMessageMap } from "../webcast";
import EventEmitter from "eventemitter3";
/** Basic WebSocket polyfill type for cross-compatibility **/
type WebSocketPolyFillEvent = MessageEvent | {
    data: string | Buffer | ArrayBuffer | ArrayBufferView;
};
type WebSocketPolyFill = {
    onmessage: (event: WebSocketPolyFillEvent) => void;
};
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
export declare function pipeEvents(ws: WebSocketPolyFill): WebcastEventEmitter;
export {};
//# sourceMappingURL=typed-emitter.d.ts.map