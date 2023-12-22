# @nnecec/eslint-config

## Features

- Work friendly with `Prettier`.
- Extends `third-party-config:recommended` first.
- Default enabled: `unicorn`, `sort-package-json`, sort `import` & `export`, `json`.
- Optional: `TypeScript`, `React`, `Tailwind.CSS`, `jsdoc`.
- ESLint flat config (\>=0.7.0).

## Usage

```shell
$ npm install --save-dev @nnecec/eslint-config
# or
$ pnpm add @nnecec/eslint-config
```

Create `eslint.config.js` at your project:

```js
import nnecec from '@nnecec/eslint-config'

export default nnecec()
// or
export default [
  ...nnecec(),
  {
    // your configs
  }
]
```

### Options

```ts
type Options = {
  prettier: boolean // default: true
  unicorn: boolean // default: true
  'sort-package-json': boolean // default: true
  sort: boolean // default: true
  json: boolean // default: true
  // ------
  jsdoc: boolean // default: false
  typescript: boolean // default: false
  react: boolean // default: false
  tailwindcss: boolean // default: false
  node: boolean // default: false
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
