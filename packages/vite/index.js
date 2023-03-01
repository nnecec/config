const path = require('node:path')
const process = require('node:process')
const reactRefresh = require('@vitejs/plugin-react').default
const tsconfigPaths = require('vite-tsconfig-paths').default
const { visualizer } = require('rollup-plugin-visualizer')

module.exports = function reactPlugin({ jsxRuntime = 'automatic', base = '' } = {}) {
  return [
    {
      name: '@nnecec/preset-vite:config',
      config(userConfig) {
        return {
          base: userConfig.base || base || process.env.PUBLIC_PATH || '/',
          resolve: {
            alias: [{ find: '~', replacement: path.join(process.cwd(), './src') }],
          },
          build: {
            target: 'es2020',
            outDir: './build',
            sourcemap: userConfig.sourcemap ?? 'hidden',
            manifest: true,
          },
        }
      },
    },
    tsconfigPaths(),
    reactRefresh({ jsxRuntime }),
    process.env.BUILD_ANALYSE === 'true' &&
      visualizer({
        filename: './build/stats.html',
      }),
  ].filter(Boolean)
}
