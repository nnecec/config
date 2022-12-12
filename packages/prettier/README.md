# `@nnecec/prettier-config`

## Features

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
