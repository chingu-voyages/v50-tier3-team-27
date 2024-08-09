import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

//eventually add database keys and whatnot?

export default defineConfig({
  plugins: [react()],
})
