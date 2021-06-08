module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./testSetup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/lib/'],
};
