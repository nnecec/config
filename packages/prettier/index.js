/**
 * @type {import('prettier').Config}
 */
module.exports = {
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'none',
  jsxSingleQuote: false,
  plugins: [require('prettier-plugin-tailwindcss')]
}
