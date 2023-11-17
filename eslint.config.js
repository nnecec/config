import nnecec from '@nnecec/eslint-config'

/** @type {import('eslint').Linter.FlatConfig[]}  */

export default [
  ...nnecec({
    typescript: true,
  }),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
