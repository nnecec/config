import type { Linter } from 'eslint'

import { pluginPerfectionist } from '../externals'

export const sort = (): Linter.FlatConfig[] => {
  return [
    {
      ignores: ['**/package.json'],
      plugins: {
        perfectionist: pluginPerfectionist,
      },
      rules: {
        ...pluginPerfectionist.configs['recommended-natural'].rules,
        // https://eslint-plugin-perfectionist.azat.io/
        'perfectionist/sort-imports': [
          'error',
          {
            'custom-groups': {
              type: {
                'external-scope': 'external-scope',
                react: 'react',
              },
              value: {
                'external-scope': ['@*/*'],
                react: ['react', 'react-*'],
              },
            },
            groups: [
              'type',
              'react',
              'builtin',
              'external',
              'external-scope',
              'internal-type',
              'internal',
              ['parent-type', 'sibling-type', 'index-type'],
              ['parent', 'sibling', 'index'],
              'side-effect',
              'style',
              'object',
              'unknown',
            ],
            'internal-pattern': ['@/**', '~/**'],
            'newlines-between': 'always',
            type: 'natural',
          },
        ],
      },
    },
    {
      files: ['postcss.config.*'],
      rules: {
        // prevent plugins call order.
        'perfectionist/sort-objects': 'off',
      },
    },
  ]
}
