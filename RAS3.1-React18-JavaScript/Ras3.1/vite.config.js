
import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const PORT = 3331;
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.resolve(process.cwd(), 'node_modules/$1'),
      },
      {
        find: /^src(.+)/,
        replacement: path.resolve(process.cwd(), 'src/$1'),
      },
    ],
  },
  server: { port: PORT, host: true,open:'/',proxy: {
    '/api': {
      // target: 'http://iot-uniapp.yangzijiang.com:8095/',
      target: process.env.VITE_SERVER_URL || 'http://172.20.18.143:8092/',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  }, },
  preview: { port: PORT, host: true },
})
