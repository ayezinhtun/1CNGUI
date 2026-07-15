import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    headers: (ctx) => {
      if (ctx.url.endsWith('.txt')) {
        return {
          'Content-Disposition': 'attachment'
        }
      }
    }
  }
})