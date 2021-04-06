module.exports = {
  plugins: ['security', 'mocha', 'node'],
  extends: [
    'plugin:security/recommended',
    'plugin:mocha/recommended',
    'plugin:node/recommended'
  ],
  parserOptions: {
    ecmaVersion: 10
  },
  rules: {
    'no-whitespace-before-property': 'error',
    'max-lines-per-function': ['error', 50],
    'arrow-parens': ['error', 'as-needed'],
    'quote-props': ['error', 'as-needed'],
    'linebreak-style': ['error', 'unix'],
    'padded-blocks': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'max-classes-per-file': 'error',
    'prefer-object-spread': 'error',
    'no-unneeded-ternary': 'error',
    'no-implicit-globals': 'error',
    'no-confusing-arrow': 'error',
    quotes: ['error', 'single'],
    'no-trailing-spaces': 'error',
    'prefer-rest-params': 'error',
    'one-var': ['error', 'never'],
    'no-nested-ternary': 'error',
    'no-param-reassign': 'error',
    'no-extend-native': 'error',
    'max-lines': ['error', 300],
    semi: ['error', 'always'],
    'no-implied-eval': 'error',
    'no-multi-assign': 'error',
    'prefer-template': 'warn',
    'prefer-spread': 'error',
    'no-extra-semi': 'error',
    'no-lonely-if': 'error',
    'prefer-const': 'error',
    'no-eq-null': 'error',
    'no-console': 'off',
    'no-alert': 'error',
    'no-eval': 'error',
    'no-var': 'error',
    curly: 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'do',
          'if',
          'for',
          'let',
          'try',
          'iife',
          'const',
          'class',
          'block',
          'throw',
          'while',
          'return',
          'switch',
          'export',
          'block-like'
        ]
      },
      { blankLine: 'always', prev: ['const', 'let', 'function'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let']
      }
    ]
  }
};
