import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(() => {
  // Cloudflare Pages / Netlify serve from the domain root -> '/'.
  // GitHub Pages project sites need '/<repo-name>/' -> set BASE_PATH in CI.
  const env = typeof globalThis.process !== 'undefined' ? globalThis.process.env : {};
  const base = env.VITE_BASE_PATH || env.BASE_PATH || '/';
  return {
    base,
    plugins: [react(), tailwindcss()],
    build: {
      outDir: 'dist',
      chunkSizeWarningLimit: 700,
    },
  };
});

