import type { Linter } from 'eslint'

import PrettierRecommended from 'eslint-plugin-prettier/recommended'

export const prettier = (): Linter.Config[] => {
  return [PrettierRecommended]
}
