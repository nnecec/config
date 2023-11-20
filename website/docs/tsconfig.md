# @nnecec/tsconfig

## Features

- **Very strict** rules.
- Target: ESNext or NodeNext.
- Multiple targets: CommonJS, Node, React, Bundler.

## Usage

::: code-group

```sh [npm]
$ npm add -D @nnecec/tsconfig
```

```sh [pnpm]
$ pnpm add -D @nnecec/tsconfig
```

```sh [bun]
$ bun add -D @nnecec/tsconfig
```

:::

## Configuration

Then extends the config:

```json
{
  "extends": "@nnecec/tsconfig",
  "compilerOptions": {
    //...
  }
}

// different targets
{
  "extends": "@nnecec/tsconfig/node",
  // or
  "extends": "@nnecec/tsconfig/commonjs",
  // or
  "extends": "@nnecec/tsconfig/react",
  // or
  "extends": "@nnecec/tsconfig/next",
}
```
