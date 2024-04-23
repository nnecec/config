# @nnecec/biome-config

## Features

- Enable `organizeImports`.
- Enable recmended rules.
- No semicolons (`"semicolons": "asNeeded"`).
- avoid parentheses around a sole arrow function parameter.(`"arrowParentheses": "asNeeded"`)
- Single quote.(`"quoteStyle": "single"`, `"jsxQuoteStyle": "double"`)
- 2 space indent width.(`"indentStyle": "space"`, `"indentWidth": 2`)

## Usage

::: code-group

```sh [npm]
$ npm add -D @nnecec/biome-config
```

```sh [pnpm]
$ pnpm add -D @nnecec/biome-config
```

```sh [bun]
$ bun add -D @nnecec/biome-config
```

:::

## Configuration

Then create a [configuration file](https://prettier.io/docs/en/configuration) named `biome.json` at your project's root path, choose one way to fill your configuration:

```json
{
  "extends": ["@nnecec/biome-config"]
}
```
