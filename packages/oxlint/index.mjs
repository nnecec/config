import base from './base.json' with { type: 'json' }

// `exports["."]` exposes this module for ESM consumers.
// We keep `default` as the raw oxlint config object so it can also be used as `extends: ["@nnecec/oxlint-config"]`.
export { base }
export default base

