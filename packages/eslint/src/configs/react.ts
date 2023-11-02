import { Linter } from 'eslint'
import { pluginReact, pluginReactHooks } from '../externals'

export const react = (): Linter.FlatConfig[] => {
  return [
    {
      plugins: {
        react: pluginReact,
        'react-hooks': pluginReactHooks,
      },
      rules: {
        ...pluginReact.configs.recommended.rules,
        ...pluginReactHooks.configs.recommended.rules,
        'jsx-quotes': ['error', 'prefer-double'],
        'react/jsx-no-leaked-render': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': [
          'error',
          {
            component: true,
            html: true,
          },
        ],
      },
    },
  ]
}
