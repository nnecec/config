import type { Linter } from 'eslint'

import { pluginPromise } from '../externals'
import globals from 'globals'

export const javascript = (): Linter.Config[] => {
  return [
    {
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2024,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 'latest',
          sourceType: 'module',
        },
        sourceType: 'module',
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      plugins: {
        promise: pluginPromise,
      },
      rules: {
        ...pluginPromise.configs.recommended.rules,
        // common
        camelcase: ['error', { allow: ['unstable_'] }],
        'comma-dangle': ['error', 'always-multiline'],
        'dot-notation': 'off',
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
