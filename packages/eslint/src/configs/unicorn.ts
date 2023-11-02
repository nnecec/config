import { Linter } from 'eslint'
import { pluginUnicorn } from '../externals'

export const unicorn = (): Linter.FlatConfig[] => {
  return [
    {
      plugins: {
        unicorn: pluginUnicorn,
      },
      rules: {
        ...pluginUnicorn.configs.recommended.rules,
        // https://github.com/sindresorhus/eslint-plugin-unicorn
        'unicorn/no-null': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prevent-abbreviations': 'off',
      },
    },
  ]
}
