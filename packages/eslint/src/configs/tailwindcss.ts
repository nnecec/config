import type { Linter } from 'eslint'

import { pluginTailwindcss } from '../externals'

export const tailwindcss = (): Linter.FlatConfig[] => {
  return [
    {
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      plugins: {
        tailwindcss: pluginTailwindcss,
      },
      rules: {
        ...pluginTailwindcss.configs.recommended.rules,
      },
    },
  ]
}
