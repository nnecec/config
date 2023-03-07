import { join } from 'node:path'
import { cwd, env } from 'node:process'
import { UserConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { visualizer } from 'rollup-plugin-visualizer'

export default ({
  jsxRuntime = 'automatic' as 'automatic' | 'classic',
  base = '',
} = {}) => {
  return [
    {
      name: '@nnecec/preset-vite:config',
      config(userConfig: UserConfig): UserConfig {
        return {
          base: userConfig.base || base || '/',
          resolve: {
            alias: [{ find: '~', replacement: join(cwd(), './src') }],
          },
          build: {
            target: 'es2020',
            outDir: './build',
            sourcemap: userConfig.build?.sourcemap ?? 'hidden',
            manifest: true,
          },
        }
      },
    },
    tsconfigPaths(),
    reactRefresh({ jsxRuntime }),
    env['BUILD_ANALYSE'] === 'true' &&
      visualizer({
        filename: './build/stats.html',
      }),
  ].filter(Boolean)
}
