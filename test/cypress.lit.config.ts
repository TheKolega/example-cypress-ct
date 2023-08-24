import { defineConfig } from "cypress"
// @ts-ignore
import viteConfig from "./cypress/vite.config"

export default defineConfig({
  component: {
    devServer: {
      framework: "cypress-ct-lit" as any,
      bundler: "vite",
      viteConfig: viteConfig
    },
    specPattern: "./cypress/component/lit/**/*.cy.{js,jsx,ts,tsx}"
  },
  video: false
})
