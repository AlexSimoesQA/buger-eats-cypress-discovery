const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "tt2boj",
  viewportWidth: 1440,
  viewportHeight: 900,
  e2e: {
    baseUrl: 'https://buger-eats-qa.vercel.app'
  }
})

