module.exports = {
  setupFilesAfterEnv: ['./tests/setupTests.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/filemock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@teamleader/ui-utilities': 'identity-obj-proxy',
    '^@teamleader/ui-typography': 'identity-obj-proxy',
  },
  testMatch: ['<rootDir>/src/**/__tests__/**/*.spec.(ts|tsx)'],
  testPathIgnorePatterns: ['stories.spec.tsx'],
  testEnvironment: 'jsdom',
};
