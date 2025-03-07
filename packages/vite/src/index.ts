import type { UserConfig } from 'vite'

import reactRefresh from '@vitejs/plugin-react'
import path from 'node:path'
import { cwd, env } from 'node:process'
import { visualizer } from 'rollup-plugin-visualizer'
import tsconfigPaths from 'vite-tsconfig-paths'

export default function vitePreset({ base = '', jsxRuntime = 'automatic' as 'automatic' | 'classic' } = {}) {
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
                return !id.startsWith('.') && !path.isAbsolute(id)
              },
            },
            sourcemap: userConfig.build?.sourcemap ?? 'hidden',
          },
          resolve: {
            alias: [{ find: '~', replacement: path.join(cwd(), './src') }],
          },
        }
      },
      name: '@nnecec/vite-preset:config',
    },
    tsconfigPaths(),
    reactRefresh({ jsxRuntime }),
    env['BUILD_ANALYSE'] === 'true' &&
      visualizer({
        filename: './build/stats.html',
      }),
  ].filter(Boolean)
}
