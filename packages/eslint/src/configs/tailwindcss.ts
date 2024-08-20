import type { Linter } from 'eslint'

import { pluginTailwindcss } from '../externals'

export const tailwindcss = (): Linter.Config[] => {
  return pluginTailwindcss.configs['flat/recommended']
}
