import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTICE: No Tailwind imports here! Tailwind v3 works automatically via PostCSS.
export default defineConfig({
  plugins: [react()],
})