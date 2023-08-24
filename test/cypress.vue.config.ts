import { defineConfig } from "cypress"
// @ts-ignore
import viteConfig from "./cypress/vite.config"

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
      viteConfig: viteConfig
    },
    specPattern: "./cypress/component/vue/**/*.cy.{js,jsx,ts,tsx}"
  },
  video: false
})
