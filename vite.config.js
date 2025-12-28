import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'art-showcase-backend.vercel.app', //http://localhost:5000
        changeOrigin: true
      }
    }
  }
})