# EulerStream WebSocket SDK

This is an SDK for the Euler Stream WebSocket API written in TypeScript.

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

`npm i EulerStream/Euler-WebSocket-SDK`

## What You Get

1. Provides importable TypeScript types for all NodeJS library schemas
2. Provides `createWebSocketURL` for creating a WebSocket URL for a given account
3. Provides utility functions for encoding & decoding protobuf messages
4. Close codes for WebSocket connections

## WebSocket Close Codes

```ts
export enum ClientCloseCode {

  // Standard Codes
  INTERNAL_SERVER_ERROR = 1011,
  NORMAL = 1000,

  // Custom Codes (Must be 4000 to 4999)
  TIKTOK_CLOSED_CONNECTION = 4500,
  TOO_MANY_CONNECTIONS = 4429,
  INVALID_OPTIONS = 4401,
  NOT_LIVE = 4404,
  STREAM_END = 4005
}
```