module.exports = {
  rootDir: '.',
  testMatch: [
    '**/__tests__/**/?(*.)+(spec|test).+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '~(.*)$': '<rootDir>/$1',
  },
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/',
    '!**/examples/**',
    '!**/examples-*/**',
  ],
}
