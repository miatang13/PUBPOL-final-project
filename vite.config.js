import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/PUBPOL-final-project/',
  plugins: [tailwindcss()],
})
