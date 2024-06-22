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
      statements: 55,
      branches: 84,
      functions: 76,
      lines: 55,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
