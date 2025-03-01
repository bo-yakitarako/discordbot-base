import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: 'dist',
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: 'src/main.ts',
      },
      output: {
        entryFileNames: 'index.js',
        format: 'iife',
      },
    },
  },
});
