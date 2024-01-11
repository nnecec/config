import type { Linter } from 'eslint'

import globals from 'globals'

import { pluginJest } from '../externals'

export const jest = (): Linter.FlatConfig[] => {
  return [
    {
      languageOptions: {
        globals: {
          ...globals.jest,
        },
      },
      plugins: {
        jest: pluginJest,
      },
      rules: {
        ...pluginJest.configs.recommended.rules,
      },
    },
  ]
}
