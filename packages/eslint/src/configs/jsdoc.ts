import { Linter } from 'eslint'
import { pluginJSDoc } from '../externals'

export const jsdoc = (): Linter.FlatConfig[] => {
  return [
    pluginJSDoc.configs['flat/recommended'],
    {
      plugins: {
        jsdoc: pluginJSDoc,
      },
      rules: {
        'jsdoc/require-description': 'warn',
      },
    },
  ]
}
