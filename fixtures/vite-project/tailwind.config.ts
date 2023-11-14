import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    extend: {
      spacing: {
        header: '96px',
      },
    },
  },
} satisfies Config
