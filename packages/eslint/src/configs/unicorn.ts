import type { Linter } from 'eslint'

import { pluginUnicorn } from '../externals'

// https://github.com/sindresorhus/eslint-plugin-unicorn
export const unicorn = (): Linter.Config[] => {
  return [
    pluginUnicorn.configs['flat/recommended'],
    {
      rules: {
        // use prettier
        'unicorn/nested-ternary': 'off',
        'unicorn/no-nested-ternary': 'off',

        'unicorn/no-null': 'off',
        'unicorn/prevent-abbreviations': 'off',
      },
    },
  ]
}
