module.exports = {
  preset: "jest-puppeteer",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
  moduleDirectories: ["node_modules", "src"],
  testMatch: ["**/tests/puppeteer/*.test.ts?(x)"]
}