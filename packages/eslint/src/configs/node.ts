import type { Linter } from 'eslint'

import { pluginNode } from '../externals'

export const node = (): Linter.FlatConfig[] => {
  return [pluginNode.configs['flat/recommended']]
}
