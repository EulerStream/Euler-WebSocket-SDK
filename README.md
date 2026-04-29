# EulerStream WebSocket SDK

TypeScript SDK for the [Euler Stream](https://www.eulerstream.com) TikTok LIVE WebSocket service. Build URLs, decode protobuf frames, and consume strongly-typed Webcast events from any JavaScript runtime.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&style=flat-square)](https://www.linkedin.com/in/isaackogan/)
[![Patrons](https://www.eulerstream.com/api/pips/patrons?v=002)](https://www.eulerstream.com/)
![Connections](https://tiktok.eulerstream.com/analytics/pips/1)
![Stars](https://img.shields.io/github/stars/EulerStream/Euler-WebSocket-SDK?style=flat&color=0274b5&alt=1)
![Issues](https://img.shields.io/github/issues/EulerStream/Euler-WebSocket-SDK)

## Enterprise Solutions

<table>
<tr>
    <td><br/><img width="180px" style="border-radius: 10px" src="https://raw.githubusercontent.com/isaackogan/TikTokLive/master/.github/SquareLogo.png"><br/><br/></td>
    <td>
        <a href="https://www.eulerstream.com">
            <strong>Euler Stream</strong> is a paid TikTok LIVE service providing managed TikTok LIVE WebSocket connections, increased access, TikTok LIVE alerts, JWT authentication and more.
        </a>
    </td>
</tr>
</table>

## Community

Join the [EulerStream discord](https://www.eulerstream.com/discord) for questions, concerns, or just a good chat.

## Installation

```bash
npm install @eulerstream/euler-websocket-sdk
# or
pnpm add @eulerstream/euler-websocket-sdk
```

## Supported Runtimes

The package ships dual builds via the `exports` map in `package.json`. Your bundler / runtime picks the right one automatically — no configuration needed.

| Runtime              | Entry resolved                | Notes                                                                   |
| -------------------- | ----------------------------- | ----------------------------------------------------------------------- |
| **Node.js** (≥ 18)   | `dist/node/*.js`              | Reads `EULER_WS_URL` from `process.env` to override the default host.   |
| **Browser**          | `dist/web/*.js`               | No `process` access; defaults to `wss://ws.eulerstream.com`.            |
| **Bundlers** (Vite, webpack, esbuild, Rollup, Next.js, etc.) | resolved via the `browser` / `import` conditions | ESM-only, tree-shakeable.                                              |

All builds are ESM. There is no CommonJS build — consume from `import` syntax or via a bundler that handles ESM.

## Protobuf Schema Versions

TikTok's Webcast protobuf schemas are re-exported from [`tiktok-live-proto`](https://www.npmjs.com/package/tiktok-live-proto). Two schema versions ship side-by-side and you can pick which one the SDK decodes with at runtime:

| Version | Subpath import                                     | When to use                                                                                  |
| ------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **v2**  | `@eulerstream/euler-websocket-sdk/v2` *(default)*  | Current schema. Recommended for all new integrations.                                        |
| **v1**  | `@eulerstream/euler-websocket-sdk/v1`              | Legacy schema for older consumers that haven't migrated yet.                                 |

Select the schema at connect time via the `schemaVersion` feature flag (defaults to `v2`):

```ts
import { createWebSocketUrl, SchemaVersion } from '@eulerstream/euler-websocket-sdk';

const url = createWebSocketUrl({
  uniqueId: '@someuser',
  features: { schemaVersion: SchemaVersion.v2 },
});
```

Import message types directly from a versioned subpath when you need them:

```ts
import type { WebcastChatMessage, WebcastGiftMessage } from '@eulerstream/euler-websocket-sdk/v2';
```

The top-level entry re-exports the v2 schema for convenience, so `import { WebcastChatMessage } from '@eulerstream/euler-websocket-sdk'` also works.

## Quick Start

```ts
import { createWebSocketUrl, ClientCloseCode } from '@eulerstream/euler-websocket-sdk';

const url = createWebSocketUrl({
  uniqueId: '@someuser',
  jwtKey: process.env.EULER_JWT,
  features: {
    bundleEvents: true,
    syntheticPresence: true,
  },
});

const ws = new WebSocket(url);
ws.addEventListener('close', (e) => {
  if (e.code === ClientCloseCode.NOT_LIVE) console.log('streamer is offline');
});
```

## What You Get

1. `createWebSocketUrl(options)` — builds a fully-qualified WS URL with feature flags flattened into query params.
2. Strongly-typed Webcast message interfaces (v1 and v2) re-exported from `tiktok-live-proto`.
3. Protobuf decode utilities for raw frames (`DecodedData`, `decodeFrame`, etc.) when running in `rawMessages` mode.
4. `WebcastEventEmitter` — a typed `eventemitter3` subclass keyed off the schema's event names.
5. `ClientCloseCode` enum + `CloseMessageMap` for interpreting WebSocket close codes from the server.

## WebSocket Close Codes

```ts
export enum ClientCloseCode {
  // Standard
  NORMAL = 1000,
  INTERNAL_SERVER_ERROR = 1011,

  // Custom (4000–4999)
  STREAM_END = 4005,
  NO_MESSAGES_TIMEOUT = 4006,
  INVALID_OPTIONS = 4400,
  INVALID_AUTH = 4401,
  NO_PERMISSION = 4403,
  NOT_LIVE = 4404,
  TOO_MANY_CONNECTIONS = 4429,
  TIKTOK_CLOSED_CONNECTION = 4500,
  MAX_LIFETIME_EXCEEDED = 4555,
  WEBCAST_FETCH_ERROR = 4556,
  ROOM_INFO_FETCH_ERROR = 4557,
}
```
