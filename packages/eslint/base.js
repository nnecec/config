/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: ['standard', 'plugin:import/recommended', 'prettier'],
  plugins: ['unicorn', 'simple-import-sort'],
  ignorePatterns: [
    '*.min.*',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vscode'
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] }
    }
  },
  overrides: [
    {
      files: ['scripts/**/*.*'],
      rules: {
        'no-console': 'off'
      }
    },
    {
      files: [
        '__tests__/**/*.*',
        '*.test.ts',
        '*.test.js',
        '*.spec.ts',
        '*.spec.js'
      ],
      rules: {
        'no-unused-expressions': 'off'
      }
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
              ['^(lib|components|pages|types|utils)(/.*|$)'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$']
            ]
          }
        ]
      }
    }
  ],
  rules: {
    // common
    'no-unused-vars': 'warn',
    'no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true }
    ],

    // unicorns
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',

    // imports
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  }
}
