import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  description: 'A collection of front-end development configurations.',
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
        items: [{ link: '/docs/eslint', text: '@nnecec/eslint-config' }],
        text: 'Configs',
      },
    ],
    socialLinks: [
      {
        icon: 'x',
        link: 'https://x.com/nnecec_cn',
      },
      { icon: 'github', link: 'https://github.com/nnecec' },
    ],
  },
  title: 'Collection of Configs',
  titleTemplate: ":title - nnecec's Collection of Configs",
})
