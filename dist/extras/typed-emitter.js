"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipeEvents = exports.WebcastEventEmitter = void 0;
const eventemitter3_1 = __importDefault(require("eventemitter3"));
/** Cross-compatible Node + Browser event emitter for Webcast events **/
class WebcastEventEmitter extends eventemitter3_1.default {
}
exports.WebcastEventEmitter = WebcastEventEmitter;
function isBuffer(data) {
    return typeof Buffer !== 'undefined' && Buffer.isBuffer(data);
}
function isArrayBuffer(data) {
    return Object.prototype.toString.call(data) === '[object ArrayBuffer]';
}
function isArrayBufferView(data) {
    return ArrayBuffer.isView(data);
}
/**
 * Pipes WebSocket messages to a typed event emitter.
 * ASSUMPTION: WebSocket messages are not raw, and not bundled.
 *
 * @param ws The WebSocket instance to pipe events from.
 */
function pipeEvents(ws) {
    const emitter = new WebcastEventEmitter();
    ws.onmessage = (event) => {
        let data;
        if (typeof event.data === 'string') {
            data = event.data;
        }
        else if (isBuffer(event.data)) {
            data = event.data.toString();
        }
        else if (isArrayBuffer(event.data)) {
            data = new TextDecoder().decode(event.data);
        }
        else if (isArrayBufferView(event.data)) {
            data = new TextDecoder().decode(event.data.buffer);
        }
        else {
            throw new Error('Unsupported message data format');
        }
        const bundle = JSON.parse(data);
        bundle.messages.forEach((m) => emitter.emit(m.type, m.data));
    };
    return emitter;
}
exports.pipeEvents = pipeEvents;
//# sourceMappingURL=typed-emitter.js.map