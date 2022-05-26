/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    '@nnecec/eslint-config/base'
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] }
    }
  },
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true }
    ]
  }
}
