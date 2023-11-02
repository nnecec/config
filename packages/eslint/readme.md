# @nnecec/eslint-config

## Features

- Base on Standard, unicorn.
- Support Prettier.
- Less custom rules, extends dependencies:recommended first.
- Sort package.json.
- Sort `import` & `export` in js/ts.
- Optional: Tailwind.css.
- ESLint flat config.

## Usage

Edit `eslint.config.js`:

```js
import nnecec from '@nnecec/eslint-config'

export default [nnecec()]
```

### Options

```ts
type Options = {
  // default: true
  standard: boolean
  // default: true
  prettier: boolean
  // default: true
  unicorn: boolean
  // default: true
  'sort-package-json': boolean
  // default: true
  jsdoc: boolean
  // default: false
  typescript: boolean
  // default: false
  react: boolean
  // default: false
  tailwindcss: boolean
}
```

## Usage(legacy)

Install:

```bash
npm install --save-dev eslint @nnecec/eslint-config
```

Edit `.eslintrc.js`:

```js
module.exports = {
  // Base config, includes Standard, Prettier, ImportSort, unicorn.
  extends: ['@nnecec/eslint-config'],
  // includes **Base** and TypeScript config.
  extends: ['@nnecec/eslint-config/typescript'],
  // includes **TypeScript** config and React config.
  extends: ['@nnecec/eslint-config/react'],
  // includes **React** config and Tailwind.
  extends: ['@nnecec/eslint-config/react-universal'],
}
```
