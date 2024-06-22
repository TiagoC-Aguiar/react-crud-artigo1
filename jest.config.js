module.exports = {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: ["**/src/**/!(*.d).{js,jsx,ts,tsx}"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
  },
  coverageThreshold: {
    global: {
      statements: 39,
      branches: 73,
      functions: 60,
      lines: 39,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
