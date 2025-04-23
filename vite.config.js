// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Explicitly define the output directory
  },
  server: {
    fs: {
      strict: false, // Helps avoid file access issues during dev
    },
  },
});
