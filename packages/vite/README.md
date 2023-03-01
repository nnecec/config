# `@nnecec/preset-vite`

## Features

- Integrate @vite/plugin-react, support TypeScript.
- Analyze output assets with `process.env.BUILD_ANALYSE=true`.
- `src/` alias `~/`

## Usage

Install:

```bash
$ npm install --save-dev vite @nnecec/preset-vite
```

Edit `vite.config.js`:

```js
import preset from '@nnecec/preset-vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [preset()],
})
```
