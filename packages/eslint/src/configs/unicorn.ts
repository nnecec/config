import type { Linter } from 'eslint'

import { pluginUnicorn } from '../externals'

export const unicorn = (): Linter.FlatConfig[] => {
  return [
    {
      plugins: {
        unicorn: pluginUnicorn,
      },
      rules: {
        // https://github.com/sindresorhus/eslint-plugin-unicorn
        ...pluginUnicorn.configs.recommended.rules,
        'unicorn/nested-ternary': 'off',
        'unicorn/no-null': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prevent-abbreviations': 'off',
      },
    },
  ]
}
