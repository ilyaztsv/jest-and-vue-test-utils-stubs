module.exports = {
  testMatch: ['**/(*.)spec.js'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
    '^@mocks/(.*)': '<rootDir>/tests/mocks/$1',
    '^utils/(.*)': '<rootDir>/src/utils/$1',
    // ниже это хак: https://github.com/vuejs/vue-jest/issues/13
    '^\\./resources/assets/js/(.*)$': '<rootDir>/resources/assets/js/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverageFrom: [
    'src/components/*.{js,vue}',
    '!**/node_modules/**',
    '!src/main.js',
    '!src/app.vue',
    '!src/router/index.js',
    '!src/store/index.js'
  ],
  collectCoverage: false,
  coverageReporters: ['json', 'html']
};
