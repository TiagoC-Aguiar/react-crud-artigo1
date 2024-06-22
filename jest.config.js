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
      statements: 18,
      branches: 49,
      functions: 37,
      lines: 18,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
