import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), envCompatible()],
  server: {
    host: true, // Escucha todas las interfaces
    port: 3000,
    strictPort: true,
    // Agrega esto para permitir el host de ngrok:
    allowedHosts: [
      '3e51dd6a54f2.ngrok-free.app',
      'a4fe866ecce0.ngrok-free.app',
      
      '.ngrok-free.app' // Permite cualquier subdominio ngrok
    ]
  },
  // Opcional: Configura el base para assets
  base: '/'
})