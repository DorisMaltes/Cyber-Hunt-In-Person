import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), envCompatible()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    // add more ngrok domains
    allowedHosts: [
      '3e51dd6a54f2.ngrok-free.app',
      'a4fe866ecce0.ngrok-free.app',
      
      '.ngrok-free.app' // allow any ngrok subdomain
    ]
  },
  // Optional: Configure the base for assets
  base: '/'
})