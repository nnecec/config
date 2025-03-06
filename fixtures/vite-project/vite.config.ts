import type { UserConfig } from 'vite'

import preset from '@nnecec/vite-preset'
import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [preset(), tailwindcss()],
} satisfies UserConfig
