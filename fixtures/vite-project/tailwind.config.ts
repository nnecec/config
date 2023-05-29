import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        header: '96px',
      },
    },
  },
  plugins: [],
} satisfies Config
