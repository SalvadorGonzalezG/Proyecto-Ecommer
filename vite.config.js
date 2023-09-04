import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // configuro Alias para mis Carpetas.
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')// cuando se encuentre una coma redirige la ruta
    }
  }
})
