import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '枫版 Wiki',
      description: '枫版生物百科',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Maple Wiki',
      description: 'Maple creature encyclopedia',
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '快速入门', link: '/markdown-examples' },
      { text: '生物排行', link: '/markdown-examples' },
      { text: '关于', link: '/markdown-examples' },
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})