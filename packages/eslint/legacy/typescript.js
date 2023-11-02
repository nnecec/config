/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['./base'],
  overrides: [
    {
      extends: ['./base', 'plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
          },
        ],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-use-before-define': [
          'error',
          { classes: false, functions: false, variables: true },
        ],
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
      },
      settings: {
        'import/resolver': {
          node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
        },
      },
    },
  ],
}
