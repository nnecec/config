import type { Linter } from 'eslint'

import {
  ignore,
  imports,
  javascript,
  jsdoc,
  json,
  node,
  packagejson,
  prettier,
  react,
  sort,
  tailwindcss,
  typescript,
  unicorn,
} from './configs'

type Options = {
  jsdoc?: boolean
  json?: boolean
  node?: boolean
  prettier?: boolean
  react?: boolean
  sort?: boolean
  'sort-package-json'?: boolean
  tailwindcss?: boolean
  typescript?: boolean
  unicorn?: boolean
}

export default function (options: Options = {}): Linter.FlatConfig[] {
  const {
    jsdoc: enableJSDoc = false,
    json: enableJSON = true,
    node: enableNode = false,
    prettier: enablePrettier = true,
    react: enableReact = false,
    sort: enableSort = true,
    'sort-package-json': enableSortPackageJson = true,
    tailwindcss: enableTailwindCSS = false,
    typescript: enableTypeScript = false,
    unicorn: enableUnicorn = true,
  } = options
  const configs: Linter.FlatConfig[] = [...ignore()]

  if (enablePrettier) configs.push(...prettier())

  configs.push(...imports(), ...javascript())
  if (enableNode) configs.push(...node())
  if (enableTypeScript) configs.push(...typescript())
  if (enableUnicorn) configs.push(...unicorn())
  if (enableJSON) configs.push(...json())
  if (enableJSDoc) configs.push(...jsdoc())
  if (enableReact) configs.push(...react())
  if (enableTailwindCSS) configs.push(...tailwindcss())
  if (enableSort) configs.push(...sort())
  if (enableSortPackageJson) configs.push(...packagejson())

  return configs
}
