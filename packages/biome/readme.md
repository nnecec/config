# `@nnecec/biome-config`

## Usage

Install:

```bash
$ npm install --save-dev @nnecec/biome-config
```

create `biome.json`

```json
{
  "extends": ["@nnecec/biome-config"]
}
```

if you want to override some rules, you can do so in the `biome.json` file

```json
{
  "extends": ["@nnecec/biome-config"],
  "linter": {
    "rules": {
      "suspicious": {
        "noExplicitAny": "off"
      }
    }
  }
}
```
