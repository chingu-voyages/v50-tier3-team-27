import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

//eventually add database keys and whatnot?

export default defineConfig({
  plugins: [react()],
  plantNetApiKey: "2b10zXERkHa7r16GGuKX6GQYdO",
  perenualApiKey: "sk-6XOW66a16c0debb7e6254"
})
