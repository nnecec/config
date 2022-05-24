# `@nnecec/prettier-config`

## Features

- Standard style
- Include prettier-plugin-tailwindcss

## Usage

Install:

```bash
$ npm install --save-dev @nnecec/prettier-config
```

Edit `.prettierrc.js`:

```js
module.exports = {
  ...require('@nnecec/prettier-config'),
  semi: false
}
```
