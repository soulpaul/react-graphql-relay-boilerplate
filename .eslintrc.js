module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier', 'prettier/react', 'standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'jest'],
  rules: {
    camelcase: 'off',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    semi: ['error', 'never', { beforeStatementContinuationChars: 'always' }],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        allowSeparatedGroups: true
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
