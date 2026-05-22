# `@nnecec/oxlint-config`

## Usage

Install:

```bash
$ npm install --save-dev @nnecec/oxlint-config
```

create `.oxlintrc.json`

```json
{ "extends": ["@nnecec/oxlint-config"] }
```

or

create `oxlint.config.ts`

```ts
import { base } from '@nnecec/oxlint-config'
import { defineConfig } from 'oxlint'

export default defineConfig({ extends: [base] })
```
