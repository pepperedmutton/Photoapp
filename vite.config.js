import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path';

export default defineConfig({
  root: 'client/photo_app',
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  build: {
    outDir: '../client/dist', 
    emptyOutDir: true
  }
});

