/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    './base',
    './typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  settings: {
    react: {
      version: '18.0'
    }
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/react-in-jsx-scope': 'off'
  }
}
