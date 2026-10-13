import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({ root: __dirname, resolve: { alias: { bylucide: resolve(__dirname, '../src/index.tsx') } }, build: { outDir: 'dist', emptyOutDir: true } });
