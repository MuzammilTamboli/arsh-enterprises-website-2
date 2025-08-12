import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/arsh-enterprises-website-2/',
  build: {
    outDir: 'docs',    // <--- add this!
    emptyOutDir: true, // optional, cleans docs/ before build
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});