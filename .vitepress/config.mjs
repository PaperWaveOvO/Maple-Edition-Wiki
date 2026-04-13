import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite' // 1. 引入插件

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "枫版 Wiki",
  description: "枫版生物百科",
  
  // 2. 在这里添加 Vite 配置
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  themeConfig: {
    // ... 你原本的 themeConfig 内容保持不变
    nav: [
      { text: '主页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
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