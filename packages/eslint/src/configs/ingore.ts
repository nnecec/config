import type { Linter } from 'eslint'

import { EXCLUDE } from '../files'

export const ignore = (): Linter.FlatConfig[] => {
  return [
    {
      ignores: EXCLUDE,
    },
  ]
}
