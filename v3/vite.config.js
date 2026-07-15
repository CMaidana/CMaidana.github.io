import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/conf
export default defineConfig({
  plugins: [react()],
  server: {
    // allowedHosts: ['.ngrok-free.app', '*'],
    host: true,
    port: 8000
  }
})
