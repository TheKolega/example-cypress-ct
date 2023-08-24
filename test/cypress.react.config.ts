import { defineConfig } from "cypress"
// @ts-ignore
import viteConfig from "./cypress/vite.config"

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: viteConfig
    },
    specPattern: "./cypress/component/react/**/*.cy.{js,jsx,ts,tsx}"
  },
  video: false
})
