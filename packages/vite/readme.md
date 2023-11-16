# `@nnecec/vite-preset`

## Features

- Integrate @vite/plugin-react, support TypeScript.
- Analyze output assets with `process.env.BUILD_ANALYSE=true`.
- `src/` alias `~/`
- Dependencies as external when `build.lib` config setted.

## Usage

Install:

```bash
$ npm install --save-dev vite @nnecec/vite-preset
```

Edit `vite.config.js`:

```js
import preset from '@nnecec/vite-preset'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [preset()],
})
```
