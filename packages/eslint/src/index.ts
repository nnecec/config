import {
  standard,
  prettier,
  ignore,
  imports,
  javascript,
  jsdoc,
  packagejson,
  sort,
  typescript,
  unicorn,
  react,
  tailwindcss,
  json,
} from './configs'
import { Linter } from 'eslint'

type Options = {
  standard?: boolean
  prettier?: boolean
  unicorn?: boolean
  'sort-package-json'?: boolean
  sort?: boolean
  jsdoc?: boolean
  typescript?: boolean
  react?: boolean
  tailwindcss?: boolean
  json?: boolean
}

export default function (options: Options): Linter.FlatConfig[] {
  const {
    // default: true
    standard: enableStandard = true,
    prettier: enablePrettier = true,
    unicorn: enableUnicorn = true,
    json: enableJSON = true,
    'sort-package-json': enableSortPackageJson = true,
    sort: enableSort = true,
    // default: false
    jsdoc: enableJSDoc = false,
    typescript: enableTypeScript = false,
    react: enableReact = false,
    tailwindcss: enableTailwindCSS = false,
  } = options

  const configs: Linter.FlatConfig[] = [...ignore(), ...javascript(), ...imports()]

  if (enableStandard) configs.push(...standard())
  if (enablePrettier) configs.push(...prettier())
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
