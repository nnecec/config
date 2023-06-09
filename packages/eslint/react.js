/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['./typescript', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  rules: {
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
  settings: {
    react: {
      version: 'detect',
    },
  },
}
