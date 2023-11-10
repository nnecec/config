import { Linter } from 'eslint'
import { pluginTailwindcss } from '../externals'

export const tailwindcss = (): Linter.FlatConfig[] => {
  return [
    {
      plugins: {
        tailwindcss: pluginTailwindcss,
      },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      rules: {
        ...pluginTailwindcss.configs.recommended.rules,
      },
    },
  ]
}
