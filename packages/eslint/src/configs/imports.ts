import { Linter } from 'eslint'
import { pluginImport } from '../externals'

export const imports = (): Linter.FlatConfig[] => {
  return [
    {
      plugins: {
        import: pluginImport,
      },
      settings: {
        'import/parsers': {
          espree: ['.js', '.cjs', '.mjs', '.jsx'],
        },
        'import/resolver': {
          node: true,
        },
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
    },
  ]
}
