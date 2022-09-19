import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
  },
  publicDir: '../public',
  base: './',
  outDir: './',
  server: {
    strictPort: true,
    port: 3000,
  },
  appType: 'custom',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
    }),
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: '**/*.{jsx,tsx}',
    }),
  ],
});
