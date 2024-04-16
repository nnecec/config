import type { Linter } from 'eslint'

import { tseslint, pluginImport, pluginTypescript } from '../externals'
import { ALL_TS, ALL_TSX } from '../files'

export const typescript = (): Linter.FlatConfig[] => {
  return [
    {
      files: [ALL_TS, ALL_TSX],
      plugins: {
        '@typescript-eslint': tseslint.plugin as any,
      },
      rules: {
        ...pluginTypescript.configs['recommended']!.rules,
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
          },
        ],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
      },
      settings: {
        ...pluginImport.configs.typescript.settings,
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
      },
    },
    {
      files: ['**/*.{test,spec}.ts?(x)'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ]
}
