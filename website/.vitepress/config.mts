import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  description: 'A curation of front-end development configurations',
  themeConfig: {
    footer: {
      copyright: 'Copyright © 2022-present nnecec',
      message: 'MIT License.',
    },
    lastUpdated: {
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { link: '/', text: 'Home' },
      { link: '/docs/', text: 'Docs' },
    ],
    outline: [2, 3],
    sidebar: [
      {
        items: [
          { link: '/docs/eslint', text: '@nnecec/eslint-config' },
          { link: '/docs/prettier', text: '@nnecec/prettier-config' },
          { link: '/docs/tsconfig', text: '@nnecec/tsconfig' },
          { link: '/docs/vite', text: '@nnecec/vite-preset' },
        ],
        text: 'Configs',
      },
    ],
    socialLinks: [
      {
        icon: 'x',
        link: 'https://x.com/nnecec_cn',
      },
      { icon: 'github', link: 'https://github.com/nnecec/config' },
    ],
  },
  title: 'Configs Curation',
  titleTemplate: ':title - Configs Curation',
})
