# @nnecec/eslint-config

## Features

- Include React, TypeScript, etc.
- Support Prettier.
- eslint-plugin-unicorn optional.

## Usage

Install:

```bash
npm install --save-dev eslint @nnecec/eslint-config
```

Edit `.eslintrc.js`:

```js
module.exports = {
  extends: ['@nnecec/eslint-config']
  // or
  extends: [
    '@nnecec/eslint-config/react',
    '@nnecec/eslint-config/typescript'
  ]
}
```
