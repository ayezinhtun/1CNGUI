import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: false
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.endsWith('.txt')) {
          res.setHeader('Content-Disposition', 'attachment')
        }
        next()
      })
    }
  }
})