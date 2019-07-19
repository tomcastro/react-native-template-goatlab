module.exports = {
    "preset": "react-native",
    "setupFiles": [
      "<rootDir>/tests/setup.js"
    ],
    "transform": {
      "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
      "\\.(ts|tsx)$": "ts-jest"
    },
    "globals": {
      "ts-jest": {
        "tsConfig": "<rootDir>/tsconfig.jest.json"
      }
    },
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ],
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$"
  }
