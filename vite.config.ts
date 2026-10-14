import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the base path to match your repo name and subfolder
  base: '/Turing-Demos/text-machine/',
})