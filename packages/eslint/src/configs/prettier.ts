import type { Linter } from 'eslint'

import { configPrettier } from '../externals'

export const prettier = (): Linter.FlatConfig[] => {
  return [configPrettier]
}
