import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'txt-download',
      configureServer(server) {
        server.middlewares.prepend('/103_124_184_23.txt', (req, res) => {
          const filePath = path.join(process.cwd(), 'public', '103_124_184_23.txt')
          res.setHeader('Content-Disposition', 'attachment; filename="103_124_184_23.txt"')
          res.setHeader('Content-Type', 'text/plain')
          const fileStream = fs.createReadStream(filePath)
          fileStream.pipe(res)
        })
      }
    }
  ]
})
