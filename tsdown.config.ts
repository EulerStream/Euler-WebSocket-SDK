import { defineConfig } from 'tsdown';

const outExtensions = () => ({ js: '.js', dts: '.d.ts' });

const entry = {
    index: 'src/index.ts',
    v1: 'src/webcast/schemas/v1.ts',
    v2: 'src/webcast/schemas/v2.ts',
};

export default defineConfig([
    {
        entry,
        outDir: 'dist/node',
        platform: 'node',
        format: ['esm'],
        dts: true,
        clean: true,
        outExtensions,
    },
    {
        entry,
        outDir: 'dist/web',
        platform: 'browser',
        format: ['esm'],
        dts: true,
        clean: true,
        outExtensions,
    },
]);
