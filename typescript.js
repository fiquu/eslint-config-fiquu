const { join } = require('path');

module.exports = {
  extends: [
    join(__dirname, 'index.js'),
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off', // Allow TS to guess return type
    'node/no-unsupported-features/es-syntax': 'off', // Wont recognize TS features
    'node/no-missing-import': 'off' // Wont recognize .ts
  }
};
