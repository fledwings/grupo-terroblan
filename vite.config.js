import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    hmr: false,
    allowedHosts: ['.e2b.app', '.e2b.dev', '.lovableproject.com', '.lovable.app'],
  },
})