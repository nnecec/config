import type { Linter } from 'eslint'

import { pluginNode } from '../externals'

export const node = (): Linter.Config[] => {
  return [pluginNode.configs['flat/recommended']]
}
