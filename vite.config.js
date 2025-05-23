import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuración para GitHub Pages
  base: '/portafolio-web/',
  server: {
    port: 3000,
    open: true
  }
});
