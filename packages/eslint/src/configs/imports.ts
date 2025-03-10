import type { FixupPluginDefinition } from '@eslint/compat'
import type { Linter } from 'eslint'

import { pluginImport } from '../externals'
import { fixupPluginRules } from '@eslint/compat'

export const imports = (): Linter.Config[] => {
  return [
    {
      plugins: {
        import: fixupPluginRules(pluginImport as FixupPluginDefinition),
      },
      rules: {
        ...pluginImport.configs.recommended.rules,
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-absolute-path': 'off',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/no-unresolved': 'off',
        'import/order': 'off',
      },
      settings: {
        'import/parsers': {
          espree: ['.js', '.cjs', '.mjs', '.jsx'],
        },
        'import/resolver': {
          node: true,
        },
      },
    },
  ]
}
