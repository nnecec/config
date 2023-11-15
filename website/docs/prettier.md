# @nnecec/prettier-config

## Features

- No semi
- Single quote.
- Enable proseWrap, but never wrap in markdown.
- 2 tab width.
- [New ternary formatting](https://prettier.io/docs/en/options#experimental-ternaries)

## Usage

::: code-group

```sh [npm]
$ npm add -D @nnecec/prettier-config
```

```sh [pnpm]
$ pnpm add -D @nnecec/prettier-config
```

```sh [bun]
$ bun add -D @nnecec/prettier-config
```

:::

## Configuration

Then create a [configuration file](https://prettier.io/docs/en/configuration) at your project's root path, choose one way to fill your configuration:

```js
import nnecec from '@nnecec/prettier-config'

export default nnecec
// or
export default {
  ...nnecec,
}
```

```js
module.exports = {
  ...require('@nnecec/prettier-config'),
}
```

```json
"@nnecec/prettier-config"
```
