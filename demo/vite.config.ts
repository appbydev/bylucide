import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// The demo renders the local library source: `bylucide` (also when imported by byui components)
// resolves to ../src, never to the git copy that byui pulls into node_modules.
export default defineConfig({
  root: import.meta.dirname,
  plugins: [tailwindcss()],
  resolve: {
    alias: { bylucide: resolve(import.meta.dirname, '../src/index.tsx') },
    dedupe: ['react', 'react-dom'],
  },
  // byui ships TypeScript source: serve it as source (so its `bylucide` imports hit the alias above)
  // and pre-bundle the CommonJS React entry points it reaches from outside the demo root.
  optimizeDeps: {
    exclude: ['byui'],
    include: ['react', 'react/jsx-runtime', 'react-dom', 'react-dom/client'],
  },
  server: { port: 5409, strictPort: true },
  preview: { port: 5419, strictPort: true },
  build: { outDir: 'dist', emptyOutDir: true },
});
