import { defineConfig } from "cypress"
// @ts-ignore
import viteConfig from "./cypress/vite.config"

export default defineConfig({
  component: {
    devServer: {
      framework: "svelte",
      bundler: "vite",
      viteConfig: viteConfig
    },
    specPattern: "./cypress/component/svelte/**/*.cy.{js,jsx,ts,tsx}"
  },
  video: false
})
