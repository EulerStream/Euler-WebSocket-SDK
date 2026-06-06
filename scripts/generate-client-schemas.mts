import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = resolve(__dirname, '..');
const PROTO_ROOT = resolve(PKG_ROOT, '../grpc-protobuf-sdk/proto');
const TMP_DIR = resolve(PKG_ROOT, 'tmp/client-schemas');
const CLIENT_DIR = resolve(PKG_ROOT, 'src/client');
const OUTPUT_FILE = resolve(CLIENT_DIR, 'schemas.ts');

const CLIENT_PROTO_INPUTS = [
  'webcast/websockets/public',
  'webcast/websockets/server/enums.proto',
  'webcast/websockets/server/events.proto',
] as const;

const HEADER = `syntax = "proto3";\npackage EulerStreamWebSocketClient;\n\n`;

function listProtos(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listProtos(full));
    else if (entry.isFile() && entry.name.endsWith('.proto')) out.push(full);
  }
  return out.sort();
}

function resolveClientProtos(): string[] {
  if (!existsSync(PROTO_ROOT)) throw new Error(`Missing proto source dir: ${PROTO_ROOT}`);

  const protos = new Set<string>();
  for (const input of CLIENT_PROTO_INPUTS) {
    const full = resolve(PROTO_ROOT, input);
    if (!existsSync(full)) throw new Error(`Missing client proto input: ${full}`);

    const stat = statSync(full);
    if (stat.isDirectory()) {
      for (const proto of listProtos(full)) protos.add(proto);
    } else if (stat.isFile() && full.endsWith('.proto')) {
      protos.add(full);
    }
  }

  const sorted = [...protos].sort();
  if (sorted.length === 0) throw new Error('No client .proto files found.');
  return sorted;
}

function stripHeaderLines(content: string): string {
  return content
    .split('\n')
    .filter((line) => !/^\s*(syntax|import|package)\b/.test(line))
    .join('\n')
    .replace(/\.?com\.eulerstream\.webcast\.websockets\.(?:public|common|server|gateway)\./g, '')
    .replace(/\.?com\.eulerstream\.webcast\.websockets\./g, '')
    .replace(/\bwebsockets\.(?:public|common|server|gateway)\./g, '')
    .replace(/\b(?:public|common|server|gateway)\./g, '')
    .trim();
}

function mergeProtos(protos: string[]): string {
  mkdirSync(TMP_DIR, { recursive: true });
  const merged = HEADER + protos.map((p) => stripHeaderLines(readFileSync(p, 'utf8'))).join('\n\n') + '\n';
  const outFile = resolve(TMP_DIR, 'schemas.proto');
  writeFileSync(outFile, merged, 'utf8');
  return outFile;
}

function resolvePlugin(): string {
  const binName = process.platform === 'win32' ? 'protoc-gen-ts_proto.cmd' : 'protoc-gen-ts_proto';
  const candidates = [
    resolve(PKG_ROOT, 'node_modules/.bin', binName),
    resolve(PKG_ROOT, '../../node_modules/.bin', binName),
  ];
  for (const c of candidates) if (existsSync(c)) return c;
  throw new Error('protoc-gen-ts_proto not found. Run `pnpm install` first.');
}

function runTsProto(protoFile: string, pluginPath: string): void {
  mkdirSync(CLIENT_DIR, { recursive: true });

  const args = [
    `--plugin=protoc-gen-ts_proto=${pluginPath}`,
    `--ts_proto_out=${CLIENT_DIR}`,
    '--ts_proto_opt=onlyTypes=true',
    '--ts_proto_opt=outputServices=none',
    '--ts_proto_opt=forceLong=string',
    '--ts_proto_opt=esModuleInterop=true',
    '--ts_proto_opt=snakeToCamel=true',
    `-I=${TMP_DIR}`,
    protoFile,
  ];

  console.log('[client schemas] protoc ...');
  execFileSync('protoc', args, { stdio: 'inherit' });

  if (!existsSync(OUTPUT_FILE)) throw new Error(`ts-proto did not emit ${OUTPUT_FILE}`);
}

function assertTypesOnly(): void {
  const generated = readFileSync(OUTPUT_FILE, 'utf8');
  const forbidden = [/^import\s/m, /\bencode\(/, /\bdecode\(/, /\bBinaryReader\b/, /\bBinaryWriter\b/, /\bRpc\b/, /\bObservable\b/];
  const hit = forbidden.find((pattern) => pattern.test(generated));
  if (hit) throw new Error(`Generated schemas.ts is not types-only; matched ${hit.toString()}`);
}

function main(): void {
  rmSync(TMP_DIR, { recursive: true, force: true });
  const protos = resolveClientProtos();
  const mergedProto = mergeProtos(protos);
  runTsProto(mergedProto, resolvePlugin());
  assertTypesOnly();
  rmSync(TMP_DIR, { recursive: true, force: true });
  console.log(`Generated ${OUTPUT_FILE}`);
}

main();
