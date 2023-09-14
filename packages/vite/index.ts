import type { UserConfig } from 'vite'

import { isAbsolute, join } from 'node:path'
import { cwd, env } from 'node:process'

import { visualizer } from 'rollup-plugin-visualizer'
import tsconfigPaths from 'vite-tsconfig-paths'

import reactRefresh from '@vitejs/plugin-react'

export default ({ base = '', jsxRuntime = 'automatic' as 'automatic' | 'classic' } = {}) => {
  return [
    {
      config(userConfig: UserConfig): UserConfig {
        return {
          base: userConfig.base || base || '/',
          build: {
            manifest: true,
            outDir: './build',
            rollupOptions: {
              external: (id: string) => {
                // library mode exclude dependencies from rollup
                if (userConfig.build?.lib !== undefined) {
                  return false
                }
                return !id.startsWith('.') && !isAbsolute(id)
              },
            },
            sourcemap: userConfig.build?.sourcemap ?? 'hidden',
            target: 'es2020',
          },
          resolve: {
            alias: [{ find: '~', replacement: join(cwd(), './src') }],
          },
        }
      },
      name: '@nnecec/preset-vite:config',
    },
    tsconfigPaths(),
    reactRefresh({ jsxRuntime }),
    env.BUILD_ANALYSE === 'true' &&
      visualizer({
        filename: './build/stats.html',
      }),
  ].filter(Boolean)
}
