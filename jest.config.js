module.exports = {
  setupFilesAfterEnv: ['./tests/setupTests.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@teamleader/ui-utilities': '<rootDir>/tests/__mocks__/filemock.js',
    '^@teamleader/ui-typography': '<rootDir>/tests/__mocks__/filemock.js',
  },
  testPathIgnorePatterns: ['stories'],
  testEnvironment: 'jsdom',
};
