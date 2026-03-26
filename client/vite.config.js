import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/EcoVerse-Quest/', // Add this line
  plugins: [react()],
  // (leave the rest of your file as is)
 
  build: {
    // Optimize chunk splitting for better loading
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react']
        }
      }
    },
    // Enable source maps for production debugging
    sourcemap: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000
  },
  // Optimize dev server
  server: {
    // Enable HMR for faster development
    hmr: true,
    // Optimize port handling
    host: true
  },
  // Enable CSS code splitting
  css: {
    devSourcemap: true
  }
})
