import { Linter } from 'eslint'
import { pluginPerfectionist } from '../externals'

export const sort = (): Linter.FlatConfig[] => {
  return [
    {
      plugins: {
        perfectionist: pluginPerfectionist,
      },
      ignores: ['**/package.json'],
      rules: {
        ...pluginPerfectionist.configs['recommended-natural'].rules,
        // https://eslint-plugin-perfectionist.azat.io/
        'perfectionist/sort-imports': [
          'error',
          {
            type: 'natural',
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
            'custom-groups': {
              value: {
                react: ['react', 'react-*'],
                'external-scope': ['@*/*'],
              },
              type: {
                react: 'react',
                'external-scope': 'external-scope',
              },
            },
            'newlines-between': 'always',
            'internal-pattern': ['@/**', '~/**'],
          },
        ],
      },
    },
    {
      files: ['postcss.config.js'],
      rules: {
        // prevent plugins call order.
        'perfectionist/sort-objects': 'off',
      },
    },
  ]
}
