'use strict'
import path from 'node:path'

import autoprefixer from 'autoprefixer'

import tailwindcss from 'tailwindcss'

module.exports = {
  plugins: [
    tailwindcss({ config: path.join(__dirname, './tailwind.config.js') }),
    autoprefixer(),
  ],
}
