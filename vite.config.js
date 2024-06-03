import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false, // Disable Vite's error overlay if it's causing issues
    },
  },
  base: '/portfolio/',
});
