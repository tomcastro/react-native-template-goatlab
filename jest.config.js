module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/tests/setup.js'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-navigation)'
  ],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.jest.json'
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleNameMapper: {
    'appSrc(.*)$': '<rootDir>/App/$1'
  }
}
