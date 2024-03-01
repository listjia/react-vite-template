import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/

const resolve = (dir:string)=>path.join(__dirname,dir)
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve('src')
    },
  },
  server:{
    host:"0.0.0.0"
  }
});
