const { defineConfig } = require("cypress");

module.exports = defineConfig({
  runtimeErrors: false,
  projectId: "gws8q5",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', verifyDownloadTasks);
    },
  },
});

