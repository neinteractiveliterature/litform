// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./testSetup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/lib/'],
};
