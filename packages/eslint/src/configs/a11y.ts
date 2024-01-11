import type { Linter } from 'eslint'

import { pluginJsxA11y } from '../externals'

export const jsxA11y = (): Linter.FlatConfig[] => {
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
        'jsx-a11y': pluginJsxA11y,
      },
      rules: {
        ...pluginJsxA11y.configs.recommended.rules,
      },
    },
  ]
}
