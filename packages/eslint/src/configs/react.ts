import type { Linter } from 'eslint'

import { pluginReact, pluginReactHooks } from '../externals'
import { ALL_JS_TS } from '../files'

export const react = (): Linter.Config[] => {
  return [
    {
      files: [ALL_JS_TS],
      plugins: {
        react: pluginReact,
        'react-hooks': pluginReactHooks,
      },
      rules: {
        ...pluginReact.configs.recommended.rules,
        ...pluginReactHooks.configs.recommended.rules,
        'jsx-quotes': ['error', 'prefer-double'],
        'react/jsx-no-leaked-render': 'error',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': [
          'error',
          {
            component: true,
            html: true,
          },
        ],
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ]
}
