import nnecec from '@nnecec/eslint-config'

/** @type {import('eslint').Linter.Config[]}  */

export default [
  ...nnecec({
    tailwindcss: true,
    typescript: true,
  }),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/prefer-module': 'off',
    },
  },
  {
    ignores: ['**/fixtures/**', 'website/.vitepress', '**/.turbo/**'],
  },
]
