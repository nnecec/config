import type { Linter } from 'eslint'

import { pluginJSONFiles } from '../externals'

export const packagejson = (): Linter.FlatConfig[] => {
  return [
    {
      // files: ['**/package.json'],
      plugins: {
        'json-files': pluginJSONFiles,
      },
      rules: {
        'json-files/require-unique-dependency-names': 'error',
        'json-files/sort-package-json': 'error',
      },
    },
  ]
}
