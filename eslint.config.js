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
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/prefer-module': 'off',
    },
  },
  {
    ignores: ['**/fixtures/**', 'website/.vitepress', '**/.turbo/**'],
  },
]
