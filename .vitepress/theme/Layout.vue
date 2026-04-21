<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import NavBar from './components/NavBar.vue'
import HomeLivingEntityCard from './components/HomeLivingEntityCard.vue'
import { computed } from 'vue'

const { Layout } = DefaultTheme
const { frontmatter, lang } = useData()

const i18n = {
  'zh-CN': {
    home: {
      title: '枫版 Wiki',
      tagline: '最详细的七枫斗蛐蛐生物百科',
      start: '快速开始',
      ranking: '生物排行',
      support: '支持一下七枫<span class="p-trim">！</span>',
      popular_living_entities: '热门生物',
      skill_label: '技能',
      welcome: '欢迎',
      welcome_content: `<p>
            欢迎来到由<a href="https://github.com/PaperWaveOvO" target="_blank" rel="noopener noreferrer"
              class="text-(--color-link-light)! underline! decoration-transparent! hover:decoration-(--color-link-light)! active:text-(--color-link-light-active)! decoration-2 underline-offset-2 transition-all duration-300">纸浪i（PaperWaveOvO）</a>倾力打造的<b>枫版
            Wiki</b><span class="p-trim">！</span>
          </p>

          <p class="mt-1.5!">
            这里是专为玩家建立的权威生物档案库，提供一站式、全方位的生物详情查询。
          </p>`,
      about: '关于本网站',
      about_content: '本站为非营利性平台，不隶属于 Mojang 或 Microsoft，亦非 Minecraft 官方网站。',
    },
    creatures: [
      {
        name: '骷髅王',
        skill: `<span><b>死灵复生：</b>斩杀生命值低于 5 点的队友，在其位置处召唤新的僵尸猪灵（可叠加）<span class='p-trim'>。</span></span>`
      },
      {
        name: '监守者',
        skill: `<span><b>死灵复生：</b>斩杀生命值低于 5 点的队友，在其位置处召唤新的僵尸猪灵（可叠加）<span class='p-trim'>。</span></span>`
      },
      {
        name: '美西螈',
        skill: `<span><b>死灵复生：</b>斩杀生命值低于 5 点的队友，在其位置处召唤新的僵尸猪灵（可叠加）<span class='p-trim'>。</span></span>`
      },
    ]
  },
  'en-US': {
    home: {
      title: 'Maple Edition Wiki',
      tagline: 'The most detailed creature encyclopedia',
      start: 'Get started',
      ranking: 'Rankings',
      support: 'Support July Maple!',
      popular_living_entities: 'Featured entities',
      skill_label: 'Skill',
      welcome: 'Welcome',
      welcome_content: `<p>
        Welcome to the <b>Maple Edition Wiki</b>, proudly crafted by 
          <a href="https://github.com/PaperWaveOvO" target="_blank" rel="noopener noreferrer"
            class="text-(--color-link-light)! underline! decoration-transparent! hover:decoration-(--color-link-light)! active:text-(--color-link-light-active)! decoration-2 underline-offset-2 transition-all duration-300">
            PaperWaveOvO (纸浪i)</a>!
        </p>

        <p class="mt-1.5!">
          A comprehensive, one-stop biological archive built for players to explore every detail of the game<span class="curly-quote">’</span>s creatures.
        </p>`,
      about: 'About',
      about_content: 'This is a non-profit platform, not affiliated with Mojang or Microsoft.',
    },
    cards: {
      skill: 'Skill',
    },
    creatures: [
      {
        name: 'Skeleton King',
        skill: `<span><b>Grandmaster of Arms: </b>Possesses every single skill from all skeleton variants.</span>`
      },
      {
        name: 'Warden',
        skill: `<span><b>Loud and <span class="curly-quote">“</span>Loyal<span class="curly-quote">”</span>: </b>Loses AI upon game start; continuously spams Warden <span class="curly-quote">“</span>fanboy<span class="curly-quote">”</span> quotes in the chat box after being attacked.</span>`
      },
      {
        name: 'Axolotl',
        skill: `<span><b>Deadly Cute: </b>Recruits the first creature that attacks it into the friendly team.</span>`
      },
    ]
  }
}

const tr = computed(() => i18n[lang.value] ?? i18n['zh-CN'])

const creatureConfigs = [
  {
    lightPrimary: 'var(--color-rare-gold-light-primary)',
    lightSecondary: 'var(--color-rare-gold-light-secondary)',
    lightTertiary: 'var(--color-rare-gold-light-tertiary)',
    darkPrimary: 'var(--color-rare-gold-dark-primary)',
    darkSecondary: 'var(--color-rare-gold-dark-secondary)',
    darkTertiary: 'var(--color-rare-gold-dark-tertiary)',
    starsHtml: `<span style='color: var(--color-rare-gold-light-tertiary)' class='font-bold text-1xl'>★★★★★</span>`,
    imgSrc: '/images/zombified_piglin.png',
    imgStyle: { width: '4.5rem', left: '0%', top: '-20%' }
  },
  {
    lightPrimary: 'var(--color-rare-red-light-primary)',
    lightSecondary: 'var(--color-rare-red-light-secondary)',
    lightTertiary: 'var(--color-rare-red-light-tertiary)',
    darkPrimary: 'var(--color-rare-red-dark-primary)',
    darkSecondary: 'var(--color-rare-red-dark-secondary)',
    darkTertiary: 'var(--color-rare-red-dark-tertiary)',
    starsHtml: `<span style='color: var(--color-rare-red-light-tertiary)' class='font-bold text-1xl'>★★★★☆</span>`,
    imgSrc: '/images/zombified_piglin.png',
    imgStyle: { width: '4.5rem', left: '0%', top: '-20%' }
  },
  {
    lightPrimary: 'var(--color-rare-pink-light-primary)',
    lightSecondary: 'var(--color-rare-pink-light-secondary)',
    lightTertiary: 'var(--color-rare-pink-light-tertiary)',
    darkPrimary: 'var(--color-rare-pink-dark-primary)',
    darkSecondary: 'var(--color-rare-pink-dark-secondary)',
    darkTertiary: 'var(--color-rare-pink-dark-tertiary)',
    starsHtml: `<span style='color: var(--color-rare-pink-light-tertiary)' class='font-bold text-1xl'>★★★☆☆</span>`,
    imgSrc: '/images/zombified_piglin.png',
    imgStyle: { width: '4.5rem', left: '0%', top: '-20%' }
  },
]
</script>

<template>
  <NavBar />
  <Layout>
    <template #nav-bar-title-before>
      <div class="nav-icon">
        <svg id="icon_1" data-name="layer2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 756.14 756.14">
          <path class="cls-2"
            d="M470.05,756.14c100.14,0,150.21,0,188.46-19.49,33.65-17.14,61-44.5,78.14-78.14,19.49-38.25,19.49-88.32,19.49-188.47v-183.95c0-100.14,0-150.21-19.49-188.46-17.14-33.65-44.5-61-78.14-78.14C620.26,0,570.19,0,470.05,0h-183.95c-100.14,0-150.21,0-188.46,19.49C63.99,36.63,36.63,63.99,19.49,97.63,0,135.88,0,185.95,0,286.1v183.95c0,100.14,0,150.21,19.49,188.47,17.14,33.64,44.5,61,78.14,78.14,38.25,19.49,88.32,19.49,188.46,19.49h183.95Z" />
          <g>
            <path class="cls-1"
              d="M117.98,188.83v377.84c37.87-5.28,85.15-8.61,139.22-4.94,46.71,3.17,87.45,10.81,120.88,19.31V200.27c-34.95-8.68-78.94-16.56-130.05-18.76-50.6-2.18-94.71,1.78-130.05,7.32Z" />
            <path class="cls-3"
              d="M638.17,188.83v377.84c-37.87-5.28-85.15-8.61-139.22-4.94-46.71,3.17-87.45,10.81-120.88,19.31V200.27c34.95-8.68,78.94-16.56,130.05-18.76,50.6-2.18,94.71,1.78,130.05,7.32Z" />
            <path class="cls-3"
              d="M154.31,147.55v378.57c32.44-.84,77.42,1.57,128.62,15.83,39.12,10.89,71.04,25.68,95.13,39.09V200.27c-8.94-5.74-18.5-11.28-28.71-16.48-71.64-36.47-143.54-40.07-195.05-36.25Z" />
            <path class="cls-1"
              d="M601.83,147.55v378.57c-32.44-.84-77.42,1.57-128.62,15.83-39.12,10.89-71.04,25.68-95.13,39.09V200.27c8.94-5.74,18.5-11.28,28.71-16.48,71.64-36.47,143.54-40.07,195.05-36.25Z" />
            <path class="cls-4"
              d="M480.14,368.54l-40.69,31-6.79,29.3-51.31-8.26,2.55,49.43h-11.68l2.55-49.43-51.31,8.26-6.79-29.3-40.69-31c16.75-3.12,14.89-8.02,10.17-24.47l-6.05-19.85,19.37,5.32c16.96,4.62,17.88,4.2,18.17-10.9l20.59,20.83c8.41,8.87,11.68,7.3,9.45-4.84l-9.45-49.89,9.93,4.84c10.51,4.95,10.1,3.41,14.78-4.84l15.12-27.37,15.12,27.37c4.68,8.26,4.27,9.8,14.78,4.84l9.93-4.84-9.45,49.89c-2.23,12.15,1.04,13.72,9.45,4.84l20.59-20.83c.29,15.1,1.21,15.52,18.17,10.9l19.37-5.32-6.05,19.85c-4.71,16.45-6.57,21.35,10.17,24.47Z" />
          </g>
        </svg>
      </div>
    </template>

    <template #layout-bottom>
      <div v-if="frontmatter.layout === 'home'" class="svg-decorator">
        <svg id="icon_2" data-name="layer2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 756.14 756.14">
          <path class="cls-2"
            d="M470.05,756.14c100.14,0,150.21,0,188.46-19.49,33.65-17.14,61-44.5,78.14-78.14,19.49-38.25,19.49-88.32,19.49-188.47v-183.95c0-100.14,0-150.21-19.49-188.46-17.14-33.65-44.5-61-78.14-78.14C620.26,0,570.19,0,470.05,0h-183.95c-100.14,0-150.21,0-188.46,19.49C63.99,36.63,36.63,63.99,19.49,97.63,0,135.88,0,185.95,0,286.1v183.95c0,100.14,0,150.21,19.49,188.47,17.14,33.64,44.5,61,78.14,78.14,38.25,19.49,88.32,19.49,188.46,19.49h183.95Z" />
          <g>
            <path class="cls-1"
              d="M117.98,188.83v377.84c37.87-5.28,85.15-8.61,139.22-4.94,46.71,3.17,87.45,10.81,120.88,19.31V200.27c-34.95-8.68-78.94-16.56-130.05-18.76-50.6-2.18-94.71,1.78-130.05,7.32Z" />
            <path class="cls-3"
              d="M638.17,188.83v377.84c-37.87-5.28-85.15-8.61-139.22-4.94-46.71,3.17-87.45,10.81-120.88,19.31V200.27c34.95-8.68,78.94-16.56,130.05-18.76,50.6-2.18,94.71,1.78,130.05,7.32Z" />
            <path class="cls-3"
              d="M154.31,147.55v378.57c32.44-.84,77.42,1.57,128.62,15.83,39.12,10.89,71.04,25.68,95.13,39.09V200.27c-8.94-5.74-18.5-11.28-28.71-16.48-71.64-36.47-143.54-40.07-195.05-36.25Z" />
            <path class="cls-1"
              d="M601.83,147.55v378.57c-32.44-.84-77.42,1.57-128.62,15.83-39.12,10.89-71.04,25.68-95.13,39.09V200.27c8.94-5.74,18.5-11.28,28.71-16.48,71.64-36.47,143.54-40.07,195.05-36.25Z" />
            <path class="cls-4"
              d="M480.14,368.54l-40.69,31-6.79,29.3-51.31-8.26,2.55,49.43h-11.68l2.55-49.43-51.31,8.26-6.79-29.3-40.69-31c16.75-3.12,14.89-8.02,10.17-24.47l-6.05-19.85,19.37,5.32c16.96,4.62,17.88,4.2,18.17-10.9l20.59,20.83c8.41,8.87,11.68,7.3,9.45-4.84l-9.45-49.89,9.93,4.84c10.51,4.95,10.1,3.41,14.78-4.84l15.12-27.37,15.12,27.37c4.68,8.26,4.27,9.8,14.78,4.84l9.93-4.84-9.45,49.89c-2.23,12.15,1.04,13.72,9.45,4.84l20.59-20.83c.29,15.1,1.21,15.52,18.17,10.9l19.37-5.32-6.05,19.85c-4.71,16.45-6.57,21.35,10.17,24.47Z" />
          </g>
        </svg>
      </div>
    </template>

    <template #home-hero-before>
      <div v-if="frontmatter.layout === 'home'" class="custom-home">
        <div class="hero-content flex flex-col items-center md:items-start text-center md:text-left">
          <h1 class="hero-title">{{ tr.home.title }}</h1>
          <div class="h-1"></div>
          <p class="hero-tagline text-2xl">{{ tr.home.tagline }}</p>
          <div class="h-4"></div>

          <div class="hero-actions flex flex-col w-full gap-3 items-center md:items-start">
            <a class="vp-button w-full md:w-80 h-10 flex items-center justify-center rounded-4xl
            transition-all duration-300 ease-in-out
            bg-(--color-button-bg-light-primary)
            dark:bg-(--color-button-bg-dark-primary)
            hover:bg-[color-mix(in_srgb,var(--color-button-bg-light-primary),black_10%)]
            active:bg-[color-mix(in_srgb,var(--color-button-bg-light-primary),black_20%)]
            dark:hover:bg-[color-mix(in_srgb,var(--color-button-bg-dark-primary),white_10%)]
            dark:active:bg-[color-mix(in_srgb,var(--color-button-bg-dark-primary),white_20%)]"
              href="/markdown-examples">
              <span class="text-white">{{ tr.home.start }}</span>
            </a>
            <a class="vp-button w-full md:w-80 h-10 flex items-center justify-center rounded-4xl
            transition-all duration-300 ease-in-out
            bg-(--color-button-bg-light-secondary)
            dark:bg-(--color-button-bg-dark-secondary)
            hover:bg-[color-mix(in_srgb,var(--color-button-bg-light-secondary),black_10%)]
            active:bg-[color-mix(in_srgb,var(--color-button-bg-light-secondary),black_20%)]
            dark:hover:bg-[color-mix(in_srgb,var(--color-button-bg-dark-secondary),white_10%)]
            dark:active:bg-[color-mix(in_srgb,var(--color-button-bg-dark-secondary),white_20%)]" href="/">
              <span>{{ tr.home.ranking }}</span>
            </a>
            <a class="vp-button w-full md:w-80 h-10 flex items-center justify-center rounded-4xl
            transition-all duration-300 ease-in-out
            bg-(--color-button-bg-light-secondary)
            dark:bg-(--color-button-bg-dark-secondary)
            hover:bg-[color-mix(in_srgb,var(--color-button-bg-light-secondary),black_10%)]
            active:bg-[color-mix(in_srgb,var(--color-button-bg-light-secondary),black_20%)]
            dark:hover:bg-[color-mix(in_srgb,var(--color-button-bg-dark-secondary),white_10%)]
            dark:active:bg-[color-mix(in_srgb,var(--color-button-bg-dark-secondary),white_20%)]" href="/api-examples">
              <span v-html="tr.home.support"></span>
            </a>
          </div>

          <div class="h-10"></div>

          <div class="hot-living-entities w-full items-center md:items-start flex flex-col">
            <div class="hot-living-entities text-2xl font-bold mb-3">
              {{ tr.home.popular_living_entities }}
            </div>
          </div>

          <div
            class="home-living-entity-cards w-full flex flex-col 2xl:flex-row items-center md:items-start justify-between gap-4">
            <HomeLivingEntityCard v-for="(config, i) in creatureConfigs" :key="i" :name="tr.creatures[i].name"
              :skillHtml="tr.creatures[i].skill" :skillLabel="tr.home.skill_label" v-bind="config" />
          </div>
        </div>

        <!-- <div class="blob-bg"></div> -->

        <div class="h-10"></div>

        <div class="hot-living-entities w-full items-center md:items-start flex flex-col">
          <div class="hot-living-entities text-2xl font-bold mb-3">
            {{ tr.home.welcome }}
          </div>
        </div>

        <div class="about-content" v-html="tr.home.welcome_content">
        </div>

        <div class="h-10"></div>

        <div class="hot-living-entities w-full items-center md:items-start flex flex-col">
          <div class="hot-living-entities text-2xl font-bold mb-3">
            {{ tr.home.about }}
          </div>
        </div>

        <div class="about-content">
          {{ tr.home.about_content }}
        </div>
      </div>
    </template>
  </Layout>
</template>

<style>
:root {
  --color-link-light: var(--color-button-bg-light-primary);
  --color-link-light-active: color-mix(in sRGB, var(--color-link-light), black 40%);

  --color-link-dark: #1580bc;

  --color-button-bg-light-primary: #ff7f00;
  --color-button-bg-dark-primary: #d96d00;

  --color-button-bg-light-secondary: #efefef;
  --color-button-bg-dark-secondary: #414141;

  --color-nav-button-bg-light-hover: #efefef;

  --color-rare-gold-light-primary: #ff7f00;
  --color-rare-gold-light-secondary: color-mix(in sRGB, var(--color-rare-gold-light-primary), white 50%);
  --color-rare-gold-light-tertiary: color-mix(in sRGB, var(--color-rare-gold-light-primary), white 80%);

  --color-rare-gold-dark-primary: #ff870f;
  --color-rare-gold-dark-secondary: color-mix(in sRGB, var(--color-rare-gold-dark-primary), #1e1e1e 50%);
  --color-rare-gold-dark-tertiary: color-mix(in sRGB, var(--color-rare-gold-dark-primary), #1e1e1e 80%);

  --color-rare-red-light-primary: #f21212;
  --color-rare-red-light-secondary: color-mix(in sRGB, var(--color-rare-red-light-primary), white 50%);
  --color-rare-red-light-tertiary: color-mix(in sRGB, var(--color-rare-red-light-primary), white 80%);

  --color-rare-red-dark-primary: #f21212;
  --color-rare-red-dark-secondary: color-mix(in sRGB, var(--color-rare-red-dark-primary), #1e1e1e 50%);
  --color-rare-red-dark-tertiary: color-mix(in sRGB, var(--color-rare-red-dark-primary), #1e1e1e 80%);

  --color-rare-pink-light-primary: #f342b2;
  --color-rare-pink-light-secondary: color-mix(in sRGB, var(--color-rare-pink-light-primary), white 50%);
  --color-rare-pink-light-tertiary: color-mix(in sRGB, var(--color-rare-pink-light-primary), white 80%);

  --color-rare-pink-dark-primary: #f152b7;
  --color-rare-pink-dark-secondary: color-mix(in sRGB, var(--color-rare-pink-dark-primary), #1e1e1e 50%);
  --color-rare-pink-dark-tertiary: color-mix(in sRGB, var(--color-rare-pink-dark-primary), #1e1e1e 80%);
}
</style>

<style scoped>
:deep(.VPNav) {
  display: none !important;
}

.nav-icon {
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  /* 强制给 SVG 一个可见大小 */
  width: 2rem;
  height: 2rem;
}

.nav-icon svg {
  width: 100%;
  height: 100%;
  /* 确保颜色类名在这里也能生效 */
}

:deep(.VPNavBar .container) {
  max-width: 100% !important;
  padding: 0rem 2rem !important;
}

/* 这里写你专属的首页样式 */
.custom-home {
  padding: 8rem 14rem 0rem 14rem;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 850;
  line-height: 1.1;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #ee8345 10%, #efc700 90%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cls-1 {
  fill: #fdead6;
}

.cls-2 {
  fill: #f6b267;
}

.cls-3 {
  fill: #fbdcb6;
}

.cls-4 {
  fill: #d75329;
}

.svg-decorator {
  position: fixed;
  top: 15%;
  right: 20rem;
  z-index: -100;
  width: 20rem;
  height: auto;
  opacity: 0.15;
  pointer-events: none;
  filter: drop-shadow(0 0 50px rgba(246, 178, 103, 0.3));
  animation: float-rotate 25s linear infinite;
}

@keyframes float-rotate {
  0% {
    transform: rotate(0deg) translateY(0px);
  }

  50% {
    transform: rotate(8deg) translateY(-30px);
  }

  100% {
    transform: rotate(0deg) translateY(0px);
  }
}

/* 窄屏适配：如果屏幕太窄，装饰物通常会干扰阅读，建议隐藏 */
@media (max-width: 1024px) {
  .svg-decorator {
    display: none;
  }
}

/* 移动端适配 */
@media (max-width: 767px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .custom-home {
    text-align: center;
    padding: 6rem 2rem 2rem 2rem;
  }
}
</style>