import type { Linter } from 'eslint'

import { pluginImportX } from '../externals'

export const imports = (): Linter.Config[] => {
  return [pluginImportX.flatConfigs.recommended as Linter.Config]
}
