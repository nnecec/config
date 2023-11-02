import { Linter } from 'eslint'
import globals from 'globals'

export const javascript = (): Linter.FlatConfig[] => {
  return [
    {
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 2022,
          sourceType: 'module',
        },
        sourceType: 'module'
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      rules: {
        // common
        camelcase: ['error', { allow: ['unstable_'] }],
        'comma-dangle': ['error', 'always-multiline'],
        'no-console': 'error',
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
      },
    },
    {
      files: ['scripts/**/*.*'],
      rules: {
        'no-console': 'off',
      },
    },
  ]
}
