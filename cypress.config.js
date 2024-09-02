import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa ascoltatori di eventi del nodo qui se necessario
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Percorso dei tuoi file di test
    viewportWidth: 1000, // Larghezza della finestra del browser per i test
    viewportHeight: 660, // Altezza della finestra del browser per i test
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
