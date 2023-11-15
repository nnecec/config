---
outline: 'deep'
---

# @nnecec/eslint-config

## Features

- Base on `Standard`.
- Work friendly with `Prettier`.
- Extends `third-party-eslint-config:recommended` firstly.
- Support `TypeScript`, `React`.
- Support sort package.json
- Support sort `import` & `export`.
- Optional: JSDoc, TailwindCSS.
- ESLint flat config (\>=0.7.0).

## Usage

::: code-group

```sh [npm]
$ npm add -D @nnecec/eslint-config
```

```sh [pnpm]
$ pnpm add -D @nnecec/eslint-config
```

```sh [bun]
$ bun add -D @nnecec/eslint-config
```

:::

## Configuration

Then create `eslint.config.js` at your project's root path:

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

// with options
export default nnecec({
  typescript: true
})
```

### Options

```ts
type Options = {
  // default: true
  standard: boolean
  prettier: boolean
  unicorn: boolean
  'sort-package-json': boolean
  sort: boolean
  json: boolean

  // default: false
  jsdoc: boolean
  typescript: boolean
  react: boolean
  tailwindcss: boolean
}
```
