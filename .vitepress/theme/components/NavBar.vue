<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'

const { isDark, lang } = useData()

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const langMenuOpen = ref(false)
const currentLang = ref('zh-CN')

const i18n = {
  'zh-CN': {
    nav: {
      logo: '枫版 Wiki',
      home: '主页',
      start: '快速开始',
      ranking: '生物排行',
      about: '关于',
      lang: '语言',
      appearance: '外观',
    }
  },
  'en-US': {
    nav: {
      logo: 'Maple Edition Wiki',
      home: 'Home',
      start: 'Get started',
      ranking: 'Rankings',
      about: 'About',
      lang: 'Language',
      appearance: 'Appearance',
    }
  },
  'zh-TW': {
    nav: {
      logo: '楓版 Wiki',
      home: '首頁',
      start: '快速開始',
      ranking: '生物排行',
      about: '關於本站',
      lang: '語言',
      appearance: '外觀',
    }
  }
}

const tr = computed(() => i18n[lang.value] ?? i18n['zh-CN'])

onMounted(() => {
  // 根据当前 URL 判断是哪个语言
  const path = window.location.pathname
  if (path.startsWith('/en/')) {
    currentLang.value = 'en-US'
  } else {
    currentLang.value = 'zh-CN'
  }

  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.lang-menu-wrapper')) {
      langMenuOpen.value = false
    }
  })
})

const languages = [
  { code: 'en-US', label: 'English', region: 'US' },
  { code: 'zh-CN', label: '简体中文', region: '中国大陆' },
  { code: 'zh-TW', label: '繁體中文', region: '台灣' },
]

function toggleLangMenu() {
  langMenuOpen.value = !langMenuOpen.value
  appearanceMenuOpen.value = false
}

function closeLangMenu() {
  langMenuOpen.value = false
}

const langMap = {
  'zh-CN': '/',
  'en-US': '/en/',
  'zh-TW': '/tw/',
}

function selectLang(code) {
  if (code === currentLang.value) {
    langMenuOpen.value = false
    return
  }

  currentLang.value = code
  langMenuOpen.value = false

  const target = langMap[code]
  if (target) {
    window.location.href = target
  }
}

function toggleDark() {
  isDark.value = !isDark.value
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

function handleScroll() {
  scrolled.value = window.scrollY > 10
}

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = computed(() => [
  { text: tr.value.nav.home, href: lang.value === 'en-US' ? '/en/' : '/' },
  { text: tr.value.nav.start, href: lang.value === 'en-US' ? '/en/markdown-examples' : '/markdown-examples' },
  { text: tr.value.nav.ranking, href: lang.value === 'en-US' ? '/en/api-examples' : '/api-examples' },
  { text: tr.value.nav.about, href: lang.value === 'en-US' ? '/en/about' : '/about' },
])

const socialLinks = [
  {
    href: 'https://github.com/PaperWaveOvO',
    label: 'GitHub',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>`
  }
]

// 主题弹窗
const appearanceMenuOpen = ref(false)

// 从 localStorage 读取上次的选择，默认跟随系统
const currentAppearance = ref(localStorage.getItem('appearance') ?? 'system')

function toggleAppearanceMenu() {
  appearanceMenuOpen.value = !appearanceMenuOpen.value
  langMenuOpen.value = false // 打开外观菜单时关闭语言菜单
}

const appearances = [
  { code: 'system', label: '跟随系统' },
  { code: 'light', label: '亮色模式' },
  { code: 'dark', label: '暗色模式' },
]

function selectAppearance(code) {
  if (code === currentAppearance.value) {
    appearanceMenuOpen.value = false
    return
  }

  currentAppearance.value = code
  appearanceMenuOpen.value = false
  localStorage.setItem('appearance', code)

  if (code === 'dark') {
    isDark.value = true
  } else if (code === 'light') {
    isDark.value = false
  } else {
    // 跟随系统
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}

onMounted(() => {
  // 应用存储的外观设置
  const saved = localStorage.getItem('appearance') ?? 'system'
  if (saved === 'dark') {
    isDark.value = true
  } else if (saved === 'light') {
    isDark.value = false
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  // 监听系统主题变化（仅在跟随系统时生效）
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (currentAppearance.value === 'system') {
      isDark.value = e.matches
    }
  })

  // 其他已有的 onMounted 内容保持不变
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.lang-menu-wrapper') && !e.target.closest('.appearance-menu-wrapper')) {
      langMenuOpen.value = false
      appearanceMenuOpen.value = false
    }
  })
})
</script>

<template>
  <nav
    class="custom-navbar fixed top-0 left-0 right-0 z-100 h-(--vp-nav-height,64px) bg-(--vp-c-bg) border-b border-transparent transition-all duration-300"
    :class="{ scrolled }">

    <div class="flex items-center h-full px-14">

      <!-- 左侧：Logo + 网站名 -->
      <a href="/" class="navbar-brand flex items-center gap-2 no-underline shrink-0">
        <div class="w-8 h-8 shrink-0">
          <svg data-name="layer2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 756.14 756.14" class="w-full h-full">
            <path style="fill:#f6b267"
              d="M470.05,756.14c100.14,0,150.21,0,188.46-19.49,33.65-17.14,61-44.5,78.14-78.14,19.49-38.25,19.49-88.32,19.49-188.47v-183.95c0-100.14,0-150.21-19.49-188.46-17.14-33.65-44.5-61-78.14-78.14C620.26,0,570.19,0,470.05,0h-183.95c-100.14,0-150.21,0-188.46,19.49C63.99,36.63,36.63,63.99,19.49,97.63,0,135.88,0,185.95,0,286.1v183.95c0,100.14,0,150.21,19.49,188.47,17.14,33.64,44.5,61,78.14,78.14,38.25,19.49,88.32,19.49,188.46,19.49h183.95Z" />
            <path style="fill:#fdead6"
              d="M117.98,188.83v377.84c37.87-5.28,85.15-8.61,139.22-4.94,46.71,3.17,87.45,10.81,120.88,19.31V200.27c-34.95-8.68-78.94-16.56-130.05-18.76-50.6-2.18-94.71,1.78-130.05,7.32Z" />
            <path style="fill:#fbdcb6"
              d="M638.17,188.83v377.84c-37.87-5.28-85.15-8.61-139.22-4.94-46.71,3.17-87.45,10.81-120.88,19.31V200.27c34.95-8.68,78.94-16.56,130.05-18.76,50.6-2.18,94.71,1.78,130.05,7.32Z" />
            <path style="fill:#fbdcb6"
              d="M154.31,147.55v378.57c32.44-.84,77.42,1.57,128.62,15.83,39.12,10.89,71.04,25.68,95.13,39.09V200.27c-8.94-5.74-18.5-11.28-28.71-16.48-71.64-36.47-143.54-40.07-195.05-36.25Z" />
            <path style="fill:#fdead6"
              d="M601.83,147.55v378.57c-32.44-.84-77.42,1.57-128.62,15.83-39.12,10.89-71.04,25.68-95.13,39.09V200.27c8.94-5.74,18.5-11.28,28.71-16.48,71.64-36.47,143.54-40.07,195.05-36.25Z" />
            <path style="fill:#d75329"
              d="M480.14,368.54l-40.69,31-6.79,29.3-51.31-8.26,2.55,49.43h-11.68l2.55-49.43-51.31,8.26-6.79-29.3-40.69-31c16.75-3.12,14.89-8.02,10.17-24.47l-6.05-19.85,19.37,5.32c16.96,4.62,17.88,4.2,18.17-10.9l20.59,20.83c8.41,8.87,11.68,7.3,9.45-4.84l-9.45-49.89,9.93,4.84c10.51,4.95,10.1,3.41,14.78-4.84l15.12-27.37,15.12,27.37c4.68,8.26,4.27,9.8,14.78,4.84l9.93-4.84-9.45,49.89c-2.23,12.15,1.04,13.72,9.45,4.84l20.59-20.83c.29,15.1,1.21,15.52,18.17,10.9l19.37-5.32-6.05,19.85c-4.71,16.45-6.57,21.35,10.17,24.47Z" />
          </svg>
        </div>
        <span
          class="navbar-title text-base font-bold text-(--vp-c-text-1) whitespace-nowrap transition-colors duration-300">{{
            tr.nav.logo }}</span>
      </a>

      <!-- 弹性空间 -->
      <div class="flex-1"></div>

      <!-- 桌面端导航链接 -->
      <div class="navbar-links flex items-center gap-1 mr-1">
        <a v-for="link in navLinks" :key="link.href" :href="link.href"
          class="navbar-link flex items-center px-[0.65rem]! h-8 text-[0.9rem] font-medium text-(--vp-c-text-1) no-underline rounded-md whitespace-nowrap transition-all duration-300">
          {{ link.text }}
        </a>
      </div>

      <!-- 桌面端右侧工具栏 -->
      <div class="navbar-actions flex items-center gap-1">
        <div class="w-px h-[1.4rem] bg-(--vp-c-divider) mx-2 shrink-0"></div>

        <!-- 语言按钮 -->
        <div class="lang-menu-wrapper relative">
          <button
            class="navbar-action-btn flex items-center gap-[0.3rem] px-[0.65rem]! py-[0.3rem]! text-[0.9rem] text-(--vp-c-text-1) bg-transparent border-none rounded-md cursor-pointer whitespace-nowrap transition-all duration-300"
            @click.stop="toggleLangMenu" aria-label="切换语言">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <span>{{ tr.nav.lang }}</span>
          </button>

          <Transition name="lang-menu">
            <div v-if="langMenuOpen"
              class="lang-dropdown absolute bg-(--vp-c-bg) border border-(--vp-c-divider) rounded-[1.1rem] shadow-lg p-[0.7rem] min-w-44 z-50 flex flex-col gap-1">
              <button v-for="lang in languages" :key="lang.code" @click="selectLang(lang.code)"
                class="popup-option w-full flex flex-col items-center px-3! py-2! rounded-[0.4rem] cursor-pointer border-none bg-transparent transition-all duration-200"
                :class="currentLang === lang.code ? 'active-lang' : ''">
                <span class="text-[1rem]" :class="currentLang === lang.code ? 'text-white' : 'text-(--vp-c-text-1)'">{{
                  lang.label }}</span>
                <span class="text-sm mt-[-0.1rem]"
                  :class="currentLang === lang.code ? 'text-(--color-rare-gold-light-tertiary)' : 'text-(--vp-c-text-2)'">{{
                    lang.region }}</span>
              </button>
            </div>
          </Transition>
        </div>

        <div class="w-px h-[1.4rem] bg-(--vp-c-divider) mx-2 shrink-0"></div>

        <!-- 外观切换 -->
        <div class="appearance-menu-wrapper relative">
          <button
            class="navbar-action-btn flex items-center h-8 gap-[0.4rem] px-[0.65rem]! py-[0.3rem]! text-[0.9rem] text-(--vp-c-text-1) bg-transparent border-none rounded-md cursor-pointer whitespace-nowrap transition-all duration-300"
            @click.stop="toggleAppearanceMenu">
            <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path
                d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <span>{{ tr.nav.appearance }}</span>
          </button>

          <Transition name="lang-menu">
            <div v-if="appearanceMenuOpen"
              class="appearance-dropdown absolute bg-(--vp-c-bg) border border-(--vp-c-divider) rounded-[1.1rem] shadow-lg p-[0.7rem] min-w-36 z-50 flex flex-col gap-1">
              <button v-for="appearance in appearances" :key="appearance.code"
                @click="selectAppearance(appearance.code)"
                class="popup-option w-full flex flex-col items-center px-3! py-2! rounded-[0.4rem] cursor-pointer border-none bg-transparent transition-all duration-200"
                :class="currentAppearance === appearance.code ? 'active-lang' : ''">
                <span class="text-[1rem]"
                  :class="currentAppearance === appearance.code ? 'text-white' : 'text-(--vp-c-text-1)'">{{
                    appearance.label }}</span>
              </button>
            </div>
          </Transition>
        </div>

        <div class="w-px h-[1.4rem] bg-(--vp-c-divider) mx-2 shrink-0"></div>

        <!-- 社媒链接 -->
        <a v-for="link in socialLinks" :key="link.href" :href="link.href" target="_blank" rel="noopener noreferrer"
          class="navbar-action-btn flex items-center h-8 gap-[0.3rem] px-[0.65rem]! py-[0.3rem]! text-[0.9rem] text-(--vp-c-text-1) no-underline rounded-md cursor-pointer whitespace-nowrap transition-all duration-300"
          :aria-label="link.label" v-html="link.icon">
        </a>
      </div>

      <!-- 移动端汉堡按钮 -->
      <button
        class="navbar-hamburger hidden flex-col justify-center gap-1.25 p-[0.4rem] bg-transparent border-none cursor-pointer rounded-md ml-2 transition-all duration-300"
        @click="toggleMobileMenu" :aria-label="mobileMenuOpen ? '关闭菜单' : '打开菜单'">
        <span class="hamburger-line block w-5 h-0.5 bg-(--vp-c-text-1) rounded-sm transition-all duration-300"
          :class="{ open: mobileMenuOpen }"></span>
        <span class="hamburger-line block w-5 h-0.5 bg-(--vp-c-text-1) rounded-sm transition-all duration-300"
          :class="{ open: mobileMenuOpen }"></span>
        <span class="hamburger-line block w-5 h-0.5 bg-(--vp-c-text-1) rounded-sm transition-all duration-300"
          :class="{ open: mobileMenuOpen }"></span>
      </button>
    </div>

    <!-- 移动端下拉菜单 -->
    <Transition name="mobile-menu">
      <div v-if="mobileMenuOpen"
        class="absolute top-full left-0 right-0 bg-(--vp-c-bg) border-b border-(--vp-c-divider) shadow-lg"
        @click.self="closeMobileMenu">
        <div class="flex flex-col items-center py-4 gap-1">

          <button
            class="flex items-center gap-2 px-8 py-[0.6rem] w-full max-w-64 justify-center text-[0.9rem] text-(--vp-c-text-1) bg-transparent border-none rounded-lg cursor-pointer transition-all duration-300 hover:bg-(--vp-c-bg-soft)"
            aria-label="切换语言">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <span>语言</span>
          </button>

          <button
            class="flex items-center gap-2 px-8 py-[0.6rem] w-full max-w-64 justify-center text-[0.9rem] text-(--vp-c-text-1) bg-transparent border-none rounded-lg cursor-pointer transition-all duration-300 hover:bg-(--vp-c-bg-soft)"
            @click="toggleDark">
            <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path
                d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <span>{{ isDark ? '切换到亮色' : '切换到暗色' }}</span>
          </button>

          <a v-for="link in socialLinks" :key="link.href" :href="link.href" target="_blank" rel="noopener noreferrer"
            class="flex items-center gap-2 px-8 py-[0.6rem] w-full max-w-64 justify-center text-[0.9rem] text-(--vp-c-text-1) no-underline rounded-lg cursor-pointer transition-all duration-300 hover:bg-(--vp-c-bg-soft)"
            @click="closeMobileMenu">
            <span v-html="link.icon"></span>
            <span>{{ link.label }}</span>
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
/* scrolled 状态 */
.custom-navbar.scrolled {
  border-bottom-color: var(--vp-c-divider);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
}

/* Logo hover 时文字变色 */
.navbar-brand:hover .navbar-title {
  color: var(--color-button-bg-light-primary);
}

/* 导航链接 hover/active */
.navbar-link:hover {
  background-color: var(--color-button-bg-light-secondary);
}

.navbar-link:active {
  background-color: color-mix(in srgb, var(--color-button-bg-light-secondary), black 10%);
}

:where(.dark) .navbar-link:hover {
  background-color: var(--color-button-bg-dark-secondary);
}

:where(.dark) .navbar-link:active {
  background-color: color-mix(in srgb, var(--color-button-bg-dark-secondary), white 10%);
}

/* 工具栏按钮 hover/active */
.navbar-action-btn:hover {
  background-color: var(--color-button-bg-light-secondary);
}

.navbar-action-btn:active {
  background-color: color-mix(in srgb, var(--color-button-bg-light-secondary), black 10%);
}

:where(.dark) .navbar-action-btn:hover {
  background-color: var(--color-button-bg-dark-secondary);
}

:where(.dark) .navbar-action-btn:active {
  background-color: color-mix(in srgb, var(--color-button-bg-dark-secondary), white 10%);
}

/* 汉堡按钮 hover */
.navbar-hamburger:hover {
  background-color: var(--vp-c-bg-soft);
}

/* 汉堡线动画 */
.hamburger-line:nth-child(1).open {
  transform: translateY(7px) rotate(45deg);
}

.hamburger-line:nth-child(2).open {
  opacity: 0;
}

.hamburger-line:nth-child(3).open {
  transform: translateY(-7px) rotate(-45deg);
}

/* 移动端菜单过渡动画 */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.lang-menu-enter-active,
.lang-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.lang-menu-enter-from,
.lang-menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.lang-menu-enter-to,
.lang-menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.lang-dropdown {
  top: calc(100% + 0.5rem);
  left: 50%;
  margin-left: -5.5rem;
  /* min-w 是 11rem，一半是 5.5rem */
}

.appearance-dropdown {
  top: calc(100% + 0.5rem);
  left: 50%;
  margin-left: -4.5rem;
  /* min-w 是 11rem，一半是 5.5rem */
}

.popup-option:hover {
  background-color: var(--color-button-bg-light-secondary);
}

.popup-option:active {
  background-color: color-mix(in srgb, var(--color-button-bg-light-secondary), black 10%);
}

.popup-option.active-lang {
  background-color: var(--color-button-bg-light-primary) !important;
}

.popup-option.active-lang:hover {
  background-color: color-mix(in srgb, var(--color-button-bg-light-primary), black 10%) !important;
}

.popup-option.active-lang:active {
  background-color: color-mix(in srgb, var(--color-button-bg-light-primary), black 20%) !important;
}

:where(.dark) .popup-option:hover {
  background-color: var(--color-button-bg-dark-secondary);
}

:where(.dark) .popup-option:active {
  background-color: color-mix(in srgb, var(--color-button-bg-dark-secondary), white 10%);
}

:where(.dark) .popup-option.active-lang {
  background-color: var(--color-button-bg-dark-primary) !important;
}

:where(.dark) .popup-option.active-lang:hover {
  background-color: color-mix(in srgb, var(--color-button-bg-dark-primary), white 10%) !important;
}

:where(.dark) .popup-option.active-lang:active {
  background-color: color-mix(in srgb, var(--color-button-bg-dark-primary), white 20%) !important;
}

/* 响应式 */
@media (max-width: 800px) {

  .navbar-links,
  .navbar-actions {
    display: none;
  }

  .navbar-hamburger {
    display: flex !important;
  }
}
</style>
