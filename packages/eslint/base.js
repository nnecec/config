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
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Node.js builtins prefixed with `node:`.
              ['^node:'],
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Side effect imports.
              ['^\\u0000'],
              // Internal packages.
              ['^(@|~)(/.*|$)'],
              ['^(libs|components|pages|types|utils|app)(/.*|$)'],
              // external lib types
              ['^node:.*\\u0000$', '^@?\\w.*\\u0000$'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // internal lib types
              ['^[^.].*\\u0000$', '^\\..*\\u0000$'],
              // Style imports.
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
  ],
  plugins: ['unicorn', 'simple-import-sort', 'json-files'],
  reportUnusedDisableDirectives: true,
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    // allow unstable_x
    camelcase: ['error', { allow: ['unstable_'] }],
    'comma-dangle': ['error', 'always-multiline'],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'off',
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',

    'import/no-unresolved': 'off',
    'import/order': 'off',
    // common
    'no-console': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    // import
    'perfectionist/sort-imports': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',

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
