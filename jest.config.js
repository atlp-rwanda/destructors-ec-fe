module.exports = {
    moduleFileExtensions: ['js', 'jsx'],
    testMatch: ['**/__tests__/**/*.test.js'],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  };
  