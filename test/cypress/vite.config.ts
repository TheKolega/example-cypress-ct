// import { svelte } from "@sveltejs/vite-plugin-svelte"
import react from "@vitejs/plugin-react"
import vue from "@vitejs/plugin-vue"
import path from "path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // svelte(),
    vue()
  ],
  server: {
    fs: {
      // Allow serving files from the project root
      allow: ["../../"]
    }
  },
  resolve: {
    alias: {
      vue: path.join(__dirname, "../../node_modules/vue/dist/vue.esm-bundler.js"),
      "@fws": path.join(__dirname, "../../frameworks")
    }
  }
})
