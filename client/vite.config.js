import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    visualizer({ open: true }),  // Optional: for analyzing bundle size
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';  // Bundle all node_modules into a single chunk
          }
        },
      },
    },
    chunkSizeWarningLimit: 2000,  // Increase the chunk size limit (optional)
  },
});
