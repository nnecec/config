import type { Linter } from 'eslint'

import { pluginPrettier } from '../externals'

export const prettier = (): Linter.FlatConfig[] => {
  return [
    {
      plugins: {
        prettier: pluginPrettier,
      },
      rules: {
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'prettier/prettier': 'error',
      },
    },
  ]
}
