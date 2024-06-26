export default {
  roots: ['<rootDir>/src', '<rootDir>/__tests__'],
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: ['**/src/**/!(*.d).{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '~/__tests__/(.*)': '<rootDir>/__tests__/$1',
    '~/(.*)': '<rootDir>/src/$1',
    '\\.css$': 'identity-obj-proxy',
  },
  preset: 'ts-jest',
  coverageThreshold: {
    global: {
      statements: 55,
      branches: 84,
      functions: 76,
      lines: 55,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
