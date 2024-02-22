import type { Linter } from 'eslint'

import { parserTypescript, pluginImport, pluginTypescript } from '../externals'
import { ALL_TS, ALL_TSX } from '../files'

export const typescript = (): Linter.FlatConfig[] => {
  return [
    {
      files: [ALL_TS, ALL_TSX],
      languageOptions: {
        parser: parserTypescript as any,
        parserOptions: {
          project: true,
          sourceType: 'module',
        },
      },
      plugins: {
        '@typescript-eslint': pluginTypescript,
        import: pluginImport,
      },
      rules: {
        ...pluginTypescript.configs.recommended,
        ...pluginTypescript.configs.strict.rules,
        ...pluginImport.configs.typescript.rules,

        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
          },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
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
