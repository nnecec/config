import type { ESLint, Linter } from 'eslint'

import { parserTypescript, pluginImportX, pluginTypescript, tseslint } from '../externals'
import { ALL_TS, ALL_TSX } from '../files'

export const typescript = (): Linter.Config[] => {
  return [
    {
      files: [ALL_TS, ALL_TSX],
      languageOptions: {
        parser: parserTypescript,
        parserOptions: {
          projectService: true,
          sourceType: 'module',
          tsconfigRootDir: process.cwd(),
        },
      },
      plugins: {
        '@typescript-eslint': tseslint.plugin as ESLint.Plugin,
      },
      rules: {
        ...pluginTypescript.configs['recommended-type-checked']?.rules,
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
        ...pluginImportX.configs.typescript.settings,
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
