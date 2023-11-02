import { Linter } from 'eslint'
import { parserJSON, pluginJSON } from '../externals'
import { ALL_JSON } from '../files'

export const json = (): Linter.FlatConfig[] => {
  return [
    {
      files: ALL_JSON,
      languageOptions: {
        parser: parserJSON as any,
      },
      plugins: {
        jsonc: pluginJSON as any,
      },
      rules: {
        strict: 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        ...(pluginJSON.configs['recommended-with-jsonc'].rules as any),
      },
    },
  ]
}
