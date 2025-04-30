import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: 'client',
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

