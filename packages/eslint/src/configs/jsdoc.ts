import type { Linter } from 'eslint'

import { pluginJSDoc } from '../externals'

export const jsdoc = (): Linter.Config[] => {
  return [pluginJSDoc.configs['flat/recommended']]
}
