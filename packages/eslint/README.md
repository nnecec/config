# @nnecec/eslint-config

## Features

- Base on Standard, unicorn.
- Sort package.json.
- Sort import dependencies in js/ts.
- Optional: Tailwind

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
  extends: ['@nnecec/eslint-config/typescript']
  // or
  extends: ['@nnecec/eslint-config/react']
}
```
