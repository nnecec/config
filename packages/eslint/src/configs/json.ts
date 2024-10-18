import type { ESLint, Linter } from 'eslint'

import { parserJSON, pluginJSON } from '../externals'
import { ALL_JSON } from '../files'

export const json = (): Linter.Config[] => {
  return [
    {
      files: ALL_JSON,
      ignores: ['**/package.json'],
      languageOptions: {
        parser: parserJSON as Linter.Parser,
      },
      plugins: {
        jsonc: pluginJSON as ESLint.Plugin,
      },
      rules: {
        ...pluginJSON.configs['recommended-with-jsonc'].rules,
        ...pluginJSON.configs.prettier.rules,
      },
    },
  ]
}
