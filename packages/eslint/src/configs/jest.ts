import type { Linter } from 'eslint'

import { pluginJest } from '../externals'
import globals from 'globals'

export const jest = (): Linter.Config[] => {
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
