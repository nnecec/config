/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  extends: [
    'standard',
    'prettier',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:markdown/recommended',
    'plugin:unicorn/recommended',
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
  plugins: ['unicorn', 'simple-import-sort', 'json-files'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
  overrides: [
    {
      files: ['package.json'],
      rules: {
        'json-files/sort-package-json': 'error',
        'json-files/require-unique-dependency-names': 'error',
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
        'no-unused-expressions': 'off',
        'no-only-tests/no-only-tests': 'error',
      },
    },
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Side effect imports.
              ['^\\u0000'],
              // Internal packages.
              ['^(@|~)(/.*|$)'],
              ['^(libs?|components?|pages|types|utils)(/.*|$)'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
  ],
  rules: {
    // import
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/order': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',

    // common
    'no-console': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-null': 'warn',
    'unicorn/prefer-module': 'off',
  },
}
