---
outline: 'deep'
---

# @nnecec/eslint-config

## Features

- Work friendly with `Prettier`.
- Extends `third-party-config:recommended` firstly.
- Default enabled linter: `unicorn`, `sort-package-json`, sort `import` & `export`, `json`.
- Optional linter: `TypeScript`, `React`, `Tailwind.CSS`, `jsdoc`, `node`.
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
  node: boolean
}
```
