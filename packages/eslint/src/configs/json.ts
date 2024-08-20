import type { Linter } from 'eslint'

import { parserJSON, pluginJSON } from '../externals'
import { ALL_JSON } from '../files'

export const json = (): Linter.Config[] => {
  return [
    {
      files: ALL_JSON,
      ignores: ['**/package.json'],
      languageOptions: {
        parser: parserJSON as any,
      },
      plugins: {
        jsonc: pluginJSON as any,
      },
      rules: {
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        strict: 'off',
        ...(pluginJSON.configs['recommended-with-jsonc'].rules as any),
        ...(pluginJSON.configs.prettier.rules as any),
      },
    },
  ]
}
