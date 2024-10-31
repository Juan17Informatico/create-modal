import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/create-modal', // Ajusta esto si tu aplicación se despliega en un subdirectorio
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})