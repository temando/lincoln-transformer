module.exports = {
  "collectCoverageFrom": [
    "src/**/*",
    "!**/types.ts",
    "!**/typings.d.ts",
    "!**/__tests__/**"
  ],
  "mapCoverage": true,
  "moduleDirectories": [
    "node_modules"
  ],
  "moduleFileExtensions": [
    "ts",
    "js",
    "json"
  ],
  "testRegex": "(/__tests__/.*)\\.test\\.ts$",
  "testEnvironment": "node",
  "transform": {
    ".(ts)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  "verbose": true
}
