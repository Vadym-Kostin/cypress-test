import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4200",
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
});