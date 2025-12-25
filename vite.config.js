import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This ensures the site loads correctly on GitHub Pages subfolders
  // base: '/QuantCore-web/', 
  plugins: [react()],
})