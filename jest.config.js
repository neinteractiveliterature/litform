// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./testSetup.js'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/lib/'],
};
