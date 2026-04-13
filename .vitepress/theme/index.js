// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { h, nextTick } from 'vue'
import Layout from './Layout.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    if (typeof window === 'undefined') return

    router.onBeforeRouteChange = (to) => {
      if (!document.startViewTransition) return
      return new Promise((resolve) => {
        document.startViewTransition(async () => {
          resolve()
        })
      })
    }
  }
}