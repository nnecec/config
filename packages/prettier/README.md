# `@nnecec/prettier-config`

## Features

- Include prettier-plugin-tailwindcss
- No semi, single-quota

## Usage

Install:

```bash
$ npm install --save-dev prettier @nnecec/prettier-config
```

Edit `.prettierrc.js`:

```js
module.exports = require('@nnecec/prettier-config')
// or
module.exports = {
  ...require('@nnecec/prettier-config'),
  semi: false
}
```
