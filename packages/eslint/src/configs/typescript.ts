import { parserTypescript, pluginImport, pluginTypescript } from '../externals'
import { Linter } from 'eslint'
import { ALL_JS_TS } from '../files'

export const typescript = (): Linter.FlatConfig[] => {
  return [
    {
      files: [ALL_JS_TS],
      languageOptions: {
        parser: parserTypescript as any,
        parserOptions: {
          sourceType: 'module',
        },
      },
      plugins: {
        import: pluginImport,
        '@typescript-eslint': pluginTypescript as any,
      },
      settings: {
        'import/parsers': {
          espree: ['.js', '.cjs', '.mjs', '.jsx', '.ts', '.tsx', '.mts', '.cts'],
        },
        'import/resolver': {
          typescript: true,
          node: true,
        },
      },
      rules: {
        // TODO: Waitting for flat config supported
        ...pluginTypescript.configs['eslint-recommended']!.overrides![0]!.rules!,
        ...pluginTypescript.configs['strict']!.rules!,
        ...pluginImport.configs.typescript.rules,

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
