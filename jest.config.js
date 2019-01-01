// jest.config.js
const { jestPreset: tsJest } = require('ts-jest')

module.exports = {
  ...tsJest,
  preset: 'react-native',
  transform: {
    ...tsJest.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js'
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: 'tsconfig.jest.json'
    }
  },
  // This is the only part which you can keep
  // from the above linked tutorial's config:
  cacheDirectory: '.jest/cache'
}
