# `@nnecec/prettier-config`

## Usage

**Install**:

```bash
$ npm install --save-dev @nnecec/prettier-config
```

**Edit `package.json`**:

```jsonc
{
  // ...
  "prettier": "@nnecec/prettier-config"
}
```

**Edit `.prettierrc.js`**:

```js
module.exports = {
  ...require("@nnecec/prettier-config"),
  semi: false,
};
```