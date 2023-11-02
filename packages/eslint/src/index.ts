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
}

export default function (options: Options): Linter.FlatConfig[] {
  const {
    standard: enableStandard = true,
    prettier: enablePrettier = true,
    unicorn: enableUnicorn = true,
    'sort-package-json': enableSortPackageJson = true,
    jsdoc: enableJSDoc = true,
    sort: enableSort = false,
    // default false
    typescript: enableTypeScript = false,
    react: enableReact = false,
    tailwindcss: enableTailwindCSS = false,
  } = options

  const configs: Linter.FlatConfig[] = [...javascript(), ...ignore(), ...imports()]

  if (enableStandard) configs.push(...standard())
  if (enablePrettier) configs.push(...prettier())
  if (enableUnicorn) configs.push(...unicorn())
  if (enableSortPackageJson) configs.push(...packagejson())
  if (enableJSDoc) configs.push(...jsdoc())
  if (enableReact) configs.push(...react())
  if (enableTailwindCSS) configs.push(...tailwindcss())
  if (enableTypeScript) configs.push(...typescript())
  if (enableSort) configs.push(...sort())
  if (enableJSDoc) configs.push(...jsdoc())

  return configs
}
