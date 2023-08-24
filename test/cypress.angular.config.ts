import { defineConfig } from "cypress"

export default defineConfig({
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack"
    },
    specPattern: "./cypress/component/angular/**/*.cy.{js,jsx,ts,tsx}"
  },
  video: false
})
