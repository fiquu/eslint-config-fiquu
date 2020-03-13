module.exports = {
  plugins: [
    '@typescript-eslint',
    'security',
    'mocha',
    'jsdoc',
    'node'
  ],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:security/recommended',
    'plugin:mocha/recommended',
    'plugin:jsdoc/recommended',
    'plugin:node/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 10
  },
  rules: {
    'node/no-unsupported-features/es-syntax': 'off', // Wont recognize TS features
    'node/no-missing-import': 'off', // Wont recognize .ts
    'capitalized-comments': ['error', 'always'],
    'no-whitespace-before-property': 'error',
    'max-lines-per-function': ['error', 50],
    'arrow-parens': ['error', 'as-needed'],
    'quote-props': ['error', 'as-needed'],
    'linebreak-style': ['error', 'unix'],
    'padded-blocks': ['error', 'never'],
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'max-classes-per-file': 'error',
    'prefer-object-spread': 'error',
    'no-unneeded-ternary': 'error',
    'no-implicit-globals': 'error',
    'no-confusing-arrow': 'error',
    'quotes': ['error', 'single'],
    'no-trailing-spaces': 'error',
    'prefer-rest-params': 'error',
    'one-var': ['error', 'never'],
    'no-nested-ternary': 'error',
    'no-param-reassign': 'error',
    'no-extend-native': 'error',
    'max-lines': ['error', 300],
    'semi': ['error', 'always'],
    'no-implied-eval': 'error',
    'no-multi-assign': 'error',
    'prefer-template': 'warn',
    'prefer-spread': 'error',
    'no-extra-semi': 'error',
    'require-jsdoc': 'warn',
    'no-lonely-if': 'error',
    'prefer-const': 'error',
    'no-eq-null': 'error',
    'no-console': 'off',
    'no-alert': 'error',
    'no-eval': 'error',
    'no-var': 'error',
    'curly': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      }
    ],
    'max-len': [
      'error',
      {
        'tabWidth': 2,
        'code': 120
      }
    ],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
  }
};
