import type { Linter } from 'eslint'

import {
  ignore,
  imports,
  javascript,
  jest,
  jsdoc,
  json,
  jsxA11y,
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
  jest?: boolean
  jsdoc?: boolean
  json?: boolean
  'jsx-a11y'?: boolean
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
    jest: enableJest = false,
    jsdoc: enableJSDoc = false,
    json: enableJSON = true,
    'jsx-a11y': enableJsxA11y = false,
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
  if (enableJsxA11y) configs.push(...jsxA11y())
  if (enableJest) configs.push(...jest())
  if (enableTailwindCSS) configs.push(...tailwindcss())
  if (enableSort) configs.push(...sort())
  if (enableSortPackageJson) configs.push(...packagejson())

  return configs
}
