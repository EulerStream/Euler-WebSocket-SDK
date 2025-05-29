import {WebcastEventName, WebcastMessageMap} from "@/webcast";
import EventEmitter from "eventemitter3";
import {ClientMessageBundle} from "@/client";

/** An event-map type for the typed-emitter **/
type WebcastEventMap = { [K in WebcastEventName]: (event: WebcastMessageMap[K]) => void; }

/** Cross-compatible Node + Browser event emitter for Webcast events **/
export class WebcastEventEmitter extends EventEmitter<WebcastEventMap> {
}

function isBuffer(data: any): data is Buffer {
  return typeof Buffer !== 'undefined' && Buffer.isBuffer(data);
}

function isArrayBuffer(data: any): data is ArrayBuffer {
  return Object.prototype.toString.call(data) === '[object ArrayBuffer]';
}

function isArrayBufferView(data: any): data is ArrayBufferView {
  return ArrayBuffer.isView(data);
}

/**
 * Pipes WebSocket messages to a typed event emitter.
 * ASSUMPTION: WebSocket messages are not raw, and not bundled.
 *
 * @param ws The WebSocket instance to pipe events from.
 */
export function pipeEvents(ws: any): WebcastEventEmitter {
  const emitter = new WebcastEventEmitter();

  ws.onmessage = (event: any) => {
    let data: string;

    if (typeof event.data === 'string') {
      data = event.data;
    } else if (isBuffer(event.data)) {
      data = event.data.toString();
    } else if (isArrayBuffer(event.data)) {
      data = new TextDecoder().decode(event.data);
    } else if (isArrayBufferView(event.data)) {
      data = new TextDecoder().decode(event.data.buffer as ArrayBuffer);
    } else {
      throw new Error('Unsupported message data format');
    }

    const bundle: ClientMessageBundle = JSON.parse(data);
    bundle.messages.forEach((m) => emitter.emit(m.type as any, m.data as any));
  };

  return emitter;
}
