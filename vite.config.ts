import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/warranty-receipt-vault/',
  build: { outDir: 'dist' }
})
