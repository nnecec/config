/**
 * @type {import('prettier').Config}
 */
module.exports = {
  $schema: 'https://json.schemastore.org/prettierrc',
  arrowParens: 'avoid',
  experimentalTernaries: true,
  jsxSingleQuote: false,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        printWidth: 120,
      },
    },
    {
      files: ['*.md'],
      options: {
        proseWrap: 'never',
      },
    },
  ],
  printWidth: 100,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
}
