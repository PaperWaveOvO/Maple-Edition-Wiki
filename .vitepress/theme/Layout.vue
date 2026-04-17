<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import HomeLivingEntityCard from './components/HomeLivingEntityCard.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
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
          <h1 class="hero-title">枫版 Wiki</h1>
          <div class="h-1"></div>
          <p class="hero-tagline text-2xl">最详细的七枫斗蛐蛐生物百科</p>
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
              <span class="text-white">快速开始</span>
            </a>
            <a class="vp-button w-full md:w-80 h-10 flex items-center justify-center rounded-4xl
            transition-all duration-300 ease-in-out
            bg-(--color-button-bg-light-secondary)
            dark:bg-(--color-button-bg-dark-secondary)
            hover:bg-[color-mix(in_srgb,var(--color-button-bg-light-secondary),black_10%)]
            active:bg-[color-mix(in_srgb,var(--color-button-bg-light-secondary),black_20%)]
            dark:hover:bg-[color-mix(in_srgb,var(--color-button-bg-dark-secondary),white_10%)]
            dark:active:bg-[color-mix(in_srgb,var(--color-button-bg-dark-secondary),white_20%)]"
              href="/">
              <span>生物排行</span>
            </a>
            <a class="vp-button w-full md:w-80 h-10 flex items-center justify-center rounded-4xl
            transition-all duration-300 ease-in-out
            bg-(--color-button-bg-light-secondary)
            dark:bg-(--color-button-bg-dark-secondary)
            hover:bg-[color-mix(in_srgb,var(--color-button-bg-light-secondary),black_10%)]
            active:bg-[color-mix(in_srgb,var(--color-button-bg-light-secondary),black_20%)]
            dark:hover:bg-[color-mix(in_srgb,var(--color-button-bg-dark-secondary),white_10%)]
            dark:active:bg-[color-mix(in_srgb,var(--color-button-bg-dark-secondary),white_20%)]"
              href="/api-examples">
              <span>支持一下七枫<span class="p-trim">！</span></span>
            </a>
          </div>

          <div class="h-10"></div>

          <div class="hot-living-entities text-2xl font-bold mb-3">
            热门生物
          </div>

          <div
            class="living-entity-cards w-full flex flex-col min-[90rem]:flex-row items-center md:items-start justify-between gap-4">
            <HomeLivingEntityCard name="僵尸猪灵" lightPrimary="#f21212" lightSecondary="#f89d9d" lightTertiary="#f6e4e4"
              darkPrimary="#ed3e3e" darkSecondary="#513030" darkTertiary="#3e2222"
              :starsHtml="`<span style='color: var(--color-rare-red-light-tertiary)' class='font-bold text-1xl'>★</span><span style='color: var(--color-rare-red-light-secondary)' class='font-bold text-1xl'>★★★★</span>`"
              :skillHtml="`<span><b>死灵复生：</b>斩杀生命值低于 5 点的队友，在其位置处召唤新的僵尸猪灵（可叠加）<span class='p-trim'>。</span></span>`"
              imgSrc="/images/zombified_piglin.png" :imgStyle="{ width: '4.5rem', left: '0%', top: '-20%' }" />

            <HomeLivingEntityCard name="僵尸猪灵" lightPrimary="#f21212" lightSecondary="#f89d9d" lightTertiary="#f6e4e4"
              darkPrimary="#ed3e3e" darkSecondary="#513030" darkTertiary="#3e2222"
              :starsHtml="`<span style='color: var(--color-rare-red-light-tertiary)' class='font-bold text-1xl'>★</span><span style='color: var(--color-rare-red-light-secondary)' class='font-bold text-1xl'>★★★★</span>`"
              :skillHtml="`<span><b>死灵复生：</b>斩杀生命值低于 5 点的队友，在其位置处召唤新的僵尸猪灵（可叠加）<span class='p-trim'>。</span></span>`"
              imgSrc="/images/zombified_piglin.png" :imgStyle="{ width: '4.5rem', left: '0%', top: '-20%' }" />

            <HomeLivingEntityCard name="僵尸猪灵" lightPrimary="#f21212" lightSecondary="#f89d9d" lightTertiary="#f6e4e4"
              darkPrimary="#ed3e3e" darkSecondary="#513030" darkTertiary="#3e2222"
              :starsHtml="`<span style='color: var(--color-rare-red-light-tertiary)' class='font-bold text-1xl'>★</span><span style='color: var(--color-rare-red-light-secondary)' class='font-bold text-1xl'>★★★★</span>`"
              :skillHtml="`<span><b>死灵复生：</b>斩杀生命值低于 5 点的队友，在其位置处召唤新的僵尸猪灵（可叠加）<span class='p-trim'>。</span></span>`"
              imgSrc="/images/zombified_piglin.png" :imgStyle="{ width: '4.5rem', left: '0%', top: '-20%' }" />
          </div>
        </div>
        <div class="blob-bg"></div>
      </div>
    </template>
  </Layout>
</template>

<style>
:root {
  --color-button-bg-light-primary: #ee8345;
  --color-button-bg-dark-primary: #cf723c;

  --color-button-bg-light-secondary: #efefef;
  --color-button-bg-dark-secondary: #414141;

  --color-rare-red-light-tertiary: #f6e4e4;
  --color-rare-red-light-secondary: #f77e7e;
  --color-rare-red-light-primary: #f21212;
}
</style>

<style scoped>
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
  padding: 8rem 14rem;
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
@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .custom-home {
    text-align: center;
    padding: 2rem 2rem;
  }
}
</style>