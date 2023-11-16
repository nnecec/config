# @nnecec/vite-preset

## Features

- Exclude dependencies when setting `build.lib`.
- Default outout `build`, default alias `./src` as `~/`.
- Support ReactRefresh, and default setting `jsxRuntime: automatic`.
- Export analyse result at `vite build` when process.env variable `BUILD_ANALYSE=true`.

## Usage

::: code-group

```sh [npm]
$ npm add -D @nnecec/vite-preset
```

```sh [pnpm]
$ pnpm add -D @nnecec/vite-preset
```

```sh [bun]
$ bun add -D @nnecec/vite-preset
```

:::

## Configuration

Then create a [vite.config.js](https://vitejs.dev/config/) at your project's root path:

```js
import { defineConfig } from 'vite'
import preset from '@nnecec/vite-preset'

export default defineConfig({
  plugins: [
    preset({
      // options
    }),
  ],
})
```

### Options

#### `base: string`

default: `/`

#### `jsxRuntime: 'automatic' | 'classic'`

default: `automatic`
