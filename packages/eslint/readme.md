# @nnecec/eslint-config

## Features

- Base on Standard, unicorn.
- Support Prettier.
- Less custom rules, extends dependencies:recommended first.
- Sort package.json.
- Sort `import` in js/ts.
- Optional: Tailwind.css lint.

## Usage

Install:

```bash
npm install --save-dev eslint @nnecec/eslint-config
```

Edit `.eslintrc.js`:

```js
module.exports = {
  extends: ['@nnecec/eslint-config'],
  // or
  extends: ['@nnecec/eslint-config/typescript'],
  // or
  extends: ['@nnecec/eslint-config/react'],
  // or
  extends: ['@nnecec/eslint-config/react-universal'],
}
```

Options

- @nnecec/eslint-config: Base config, includes Standard, Prettier, ImportSort, unicorn.
- @nnecec/eslint-config/typescript: includes **Base** and TypeScript config.
- @nnecec/eslint-config/react: includes **TypeScript** config and React config.
- @nnecec/eslint-config/react-universal: includes **React** config and Tailwind.
