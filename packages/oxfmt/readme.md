# `@nnecec/oxfmt-config`

## Usage

Install:

```bash
$ npm install --save-dev @nnecec/oxfmt-config
```

create `.oxlintrc.json`

```json
{ "extends": ["@nnecec/oxfmt-config"] }
```

or

create `oxfmt.config.ts`

```ts
import { base } from '@nnecec/oxfmt-config'
import { defineConfig } from 'oxfmt'

export default defineConfig({ extends: [base] })
```
