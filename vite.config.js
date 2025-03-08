import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rentify/', // Corrected base configuration
  build: {
    outDir: 'dist', // Output directory for the build
  },
});