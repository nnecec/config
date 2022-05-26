# `tsconfig`

These are base shared `tsconfig.json`s from which all other `tsconfig.json`'s inherit from.

## Features

-

## Usage

Install:

```bash
$ npm install --save-dev typescript @nnecec/tsconfig
```

Edit `tsconfig.json`:

```json
{
  "extends": "@nnecec/tsconfig",
  "compilerOptions": {
    "outDir": "dist"
  }
}
// or
{
  "extends":"@nnecec/tsconfig/react",
  // or
  "extends":"@nnecec/tsconfig/commonjs",
}
```
