import { Linter } from 'eslint'
import { pluginJSDoc } from '../externals'

export const jsdoc = (): Linter.FlatConfig[] => {
  return [pluginJSDoc.configs['flat/recommended']]
}
