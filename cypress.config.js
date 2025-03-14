const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: 'cypress/e2e/**/*.cy.ts',
  },

  e2e: {
    baseUrl: process.env['TEST_URL'] || 'http://localhost:4200',

    supportFile: false,
    chromeWebSecurity: true,
    setupNodeEvents(on, config) {},
    env: {
      acceptSslCerts: true,
    },

    supportFile: 'cypress/support/e2e.ts',
  },
});
