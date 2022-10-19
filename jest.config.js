module.exports = {
  preset:'ts-jest',
  testEnvironment:'node',
  moduleNameMapper: {
    '\\.(css|less|png|jpeg|jpg)$': '<rootDir>/test/jest/__mocks__/styleMock.js',
  }
};
