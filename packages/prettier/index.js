/**
 * @type {import('prettier').Config}
 */
module.exports = {
  $schema: 'https://json.schemastore.org/prettierrc',
  arrowParens: 'avoid',
  jsxSingleQuote: false,
  overrides: [
    { 
      files: ['*.ts', '*.tsx'],
      options: {
        printWidth: 120,
      },
    },
  ],
  printWidth: 100,
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
}
