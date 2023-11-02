/* eslint-disable perfectionist/sort-objects */
/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:unicorn/recommended',
    'plugin:perfectionist/recommended-natural',
    'prettier',
  ],
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'coverage',
    'public',
    'temp',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vscode',
  ],
  overrides: [
    {
      files: ['package.json'],
      rules: {
        'json-files/require-unique-dependency-names': 'error',
        'json-files/sort-package-json': 'error',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
      },
    },
    {
      files: ['scripts/**/*.*'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
      rules: {
        'no-only-tests/no-only-tests': 'error',
        'no-unused-expressions': 'off',
      },
    },
    {
      files: ['postcss.config.js'],
      rules: {
        // prevent plugins call order.
        'perfectionist/sort-objects': 'off',
      },
    },
  ],
  plugins: ['unicorn', 'json-files'],
  reportUnusedDisableDirectives: true,
  rules: {
    // common
    'arrow-parens': ['error', 'as-needed'],
    camelcase: ['error', { allow: ['unstable_'] }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

    // import
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'off',
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/order': 'off',

    // https://eslint-plugin-perfectionist.azat.io/
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        groups: [
          'type',
          'react',
          'builtin',
          'external',
          'external-scope',
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'side-effect',
          'style',
          'object',
          'unknown',
        ],
        'custom-groups': {
          value: {
            react: ['react', 'react-*'],
            'external-scope': ['@*/*'],
          },
          type: {
            react: 'react',
            'external-scope': 'external-scope',
          },
        },
        'newlines-between': 'always',
        'internal-pattern': ['@/**', '~/**'],
      },
    ],

    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
}
