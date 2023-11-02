import { Linter } from 'eslint'
import { pluginTailwindcss } from '../externals'

export const tailwindcss = (): Linter.FlatConfig[] => {
  return [...pluginTailwindcss.configs.recommended.rules]
}
