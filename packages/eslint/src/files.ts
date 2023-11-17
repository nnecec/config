export const JS_TS_EXT = '?([cm])[jt]s?(x)'

export const ALL_JS = '**/*.?([cm])js'
export const ALL_JSX = '**/*.?([cm])jsx'

export const ALL_TS = '**/*.?([cm])ts'
export const ALL_TSX = '**/*.?([cm])tsx'

export const ALL_JS_TS = '**/*.?([cm])[jt]s?(x)'

export const ALL_CSS = '**/*.css'

export const ALL_JSON = ['**/*.json', '**/*.json5', '**/*.jsonc']

export const ALL_MD = '**/*.md'
export const ALL_YAML = '**/*.y?(a)ml'
export const ALL_HTML = '**/*.htm?(l)'

export const ALL_TESTS = [`**/__tests__/**/*.${JS_TS_EXT}`, `**/*.spec.${JS_TS_EXT}`, `**/*.test.${JS_TS_EXT}`]

export const ALL = [ALL_JS_TS, ...ALL_JSON, ALL_YAML, ALL_HTML]

export const EXCLUDE = [
  '**/node_modules',
  '**/dist',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',

  '**/output',
  '**/coverage',
  '**/temp',
  '**/.next',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.cache',
  '**/.output',

  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
]
