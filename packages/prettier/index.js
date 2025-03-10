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
  ],
  printWidth: 100,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  experimentalOperatorPosition: 'start',
  objectWrap: 'collapse',
}
