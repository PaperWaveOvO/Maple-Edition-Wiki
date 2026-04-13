<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #nav-bar-title-before>
      <div class="nav-icon">
        <svg id="_鍥惧眰_2" data-name="layer2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 756.14 756.14">
          <path class="cls-2" d="M470.05,756.14c100.14,0,150.21,0,188.46-19.49,33.65-17.14,61-44.5,78.14-78.14,19.49-38.25,19.49-88.32,19.49-188.47v-183.95c0-100.14,0-150.21-19.49-188.46-17.14-33.65-44.5-61-78.14-78.14C620.26,0,570.19,0,470.05,0h-183.95c-100.14,0-150.21,0-188.46,19.49C63.99,36.63,36.63,63.99,19.49,97.63,0,135.88,0,185.95,0,286.1v183.95c0,100.14,0,150.21,19.49,188.47,17.14,33.64,44.5,61,78.14,78.14,38.25,19.49,88.32,19.49,188.46,19.49h183.95Z" />
          <g>
            <path class="cls-1" d="M117.98,188.83v377.84c37.87-5.28,85.15-8.61,139.22-4.94,46.71,3.17,87.45,10.81,120.88,19.31V200.27c-34.95-8.68-78.94-16.56-130.05-18.76-50.6-2.18-94.71,1.78-130.05,7.32Z" />
            <path class="cls-3" d="M638.17,188.83v377.84c-37.87-5.28-85.15-8.61-139.22-4.94-46.71,3.17-87.45,10.81-120.88,19.31V200.27c34.95-8.68,78.94-16.56,130.05-18.76,50.6-2.18,94.71,1.78,130.05,7.32Z" />
            <path class="cls-3" d="M154.31,147.55v378.57c32.44-.84,77.42,1.57,128.62,15.83,39.12,10.89,71.04,25.68,95.13,39.09V200.27c-8.94-5.74-18.5-11.28-28.71-16.48-71.64-36.47-143.54-40.07-195.05-36.25Z" />
            <path class="cls-1" d="M601.83,147.55v378.57c-32.44-.84-77.42,1.57-128.62,15.83-39.12,10.89-71.04,25.68-95.13,39.09V200.27c8.94-5.74,18.5-11.28,28.71-16.48,71.64-36.47,143.54-40.07,195.05-36.25Z" />
            <path class="cls-4" d="M480.14,368.54l-40.69,31-6.79,29.3-51.31-8.26,2.55,49.43h-11.68l2.55-49.43-51.31,8.26-6.79-29.3-40.69-31c16.75-3.12,14.89-8.02,10.17-24.47l-6.05-19.85,19.37,5.32c16.96,4.62,17.88,4.2,18.17-10.9l20.59,20.83c8.41,8.87,11.68,7.3,9.45-4.84l-9.45-49.89,9.93,4.84c10.51,4.95,10.1,3.41,14.78-4.84l15.12-27.37,15.12,27.37c4.68,8.26,4.27,9.8,14.78,4.84l9.93-4.84-9.45,49.89c-2.23,12.15,1.04,13.72,9.45,4.84l20.59-20.83c.29,15.1,1.21,15.52,18.17,10.9l19.37-5.32-6.05,19.85c-4.71,16.45-6.57,21.35,10.17,24.47Z" />
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

          <div class="hero-actions flex flex-col gap-3 items-center md:items-start">
            <a class="vp-button w-80 h-10 bg-[#e045ee] flex items-center justify-center rounded-4xl transition-all duration-300 ease-in-out hover:brightness-90 active:brightness-80" href="/markdown-examples">
              <span class="text-white">快速开始</span>
            </a>
            <a class="vp-button w-80 h-10 bg-[#e3e3e3] dark:bg-[#414141] flex items-center justify-center rounded-4xl transition-all duration-300 ease-in-out hover:brightness-90 active:brightness-80" href="/api-examples">
              <span class="text-black dark:text-white">生物排行</span>
            </a>
            <a class="vp-button w-80 h-10 bg-[#e3e3e3] dark:bg-[#414141] flex items-center justify-center rounded-4xl transition-all duration-300 ease-in-out hover:brightness-90 active:brightness-80" href="/api-examples">
              <span class="text-black dark:text-white">支持一下七枫<span class="p-trim">！</span></span>
            </a>
          </div>
        </div>
        <div class="blob-bg"></div>
      </div>
    </template>

    <template #layout-bottom>
      <div v-if="frontmatter.layout === 'home'" class="svg-decorator">
        <svg id="_鍥惧眰_2" data-name="layer2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 756.14 756.14">
          <path class="cls-2" d="M470.05,756.14c100.14,0,150.21,0,188.46-19.49,33.65-17.14,61-44.5,78.14-78.14,19.49-38.25,19.49-88.32,19.49-188.47v-183.95c0-100.14,0-150.21-19.49-188.46-17.14-33.65-44.5-61-78.14-78.14C620.26,0,570.19,0,470.05,0h-183.95c-100.14,0-150.21,0-188.46,19.49C63.99,36.63,36.63,63.99,19.49,97.63,0,135.88,0,185.95,0,286.1v183.95c0,100.14,0,150.21,19.49,188.47,17.14,33.64,44.5,61,78.14,78.14,38.25,19.49,88.32,19.49,188.46,19.49h183.95Z" />
          <g>
            <path class="cls-1" d="M117.98,188.83v377.84c37.87-5.28,85.15-8.61,139.22-4.94,46.71,3.17,87.45,10.81,120.88,19.31V200.27c-34.95-8.68-78.94-16.56-130.05-18.76-50.6-2.18-94.71,1.78-130.05,7.32Z" />
            <path class="cls-3" d="M638.17,188.83v377.84c-37.87-5.28-85.15-8.61-139.22-4.94-46.71,3.17-87.45,10.81-120.88,19.31V200.27c34.95-8.68,78.94-16.56,130.05-18.76,50.6-2.18,94.71,1.78,130.05,7.32Z" />
            <path class="cls-3" d="M154.31,147.55v378.57c32.44-.84,77.42,1.57,128.62,15.83,39.12,10.89,71.04,25.68,95.13,39.09V200.27c-8.94-5.74-18.5-11.28-28.71-16.48-71.64-36.47-143.54-40.07-195.05-36.25Z" />
            <path class="cls-1" d="M601.83,147.55v378.57c-32.44-.84-77.42,1.57-128.62,15.83-39.12,10.89-71.04,25.68-95.13,39.09V200.27c8.94-5.74,18.5-11.28,28.71-16.48,71.64-36.47,143.54-40.07,195.05-36.25Z" />
            <path class="cls-4" d="M480.14,368.54l-40.69,31-6.79,29.3-51.31-8.26,2.55,49.43h-11.68l2.55-49.43-51.31,8.26-6.79-29.3-40.69-31c16.75-3.12,14.89-8.02,10.17-24.47l-6.05-19.85,19.37,5.32c16.96,4.62,17.88,4.2,18.17-10.9l20.59,20.83c8.41,8.87,11.68,7.3,9.45-4.84l-9.45-49.89,9.93,4.84c10.51,4.95,10.1,3.41,14.78-4.84l15.12-27.37,15.12,27.37c4.68,8.26,4.27,9.8,14.78,4.84l9.93-4.84-9.45,49.89c-2.23,12.15,1.04,13.72,9.45,4.84l20.59-20.83c.29,15.1,1.21,15.52,18.17,10.9l19.37-5.32-6.05,19.85c-4.71,16.45-6.57,21.35,10.17,24.47Z" />
          </g>
        </svg>
      </div>
    </template>
  </Layout>
</template>

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
  padding: 0rem 40px !important;
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
  background: linear-gradient(135deg, #bd34fe 10%, #41d1ff 90%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cls-1 { fill: #fdead6; }
.cls-2 { fill: #f6b267; }
.cls-3 { fill: #fbdcb6; }
.cls-4 { fill: #d75329; }

.svg-decorator {
  position: fixed;
  top: 20%;
  right: 10rem; /* 稍微往右调一点，露出一半比较高级 */
  z-index: 1; 
  width: 40rem;
  height: auto;
  opacity: 0.15; /* 降低一点透明度，背景装饰不抢戏 */
  pointer-events: none;
  filter: drop-shadow(0 0 50px rgba(246, 178, 103, 0.3)); /* 根据你的 SVG 橙黄色调改了发光色 */
  animation: float-rotate 25s linear infinite;
}

@keyframes float-rotate {
  0% { transform: rotate(0deg) translateY(0px); }
  50% { transform: rotate(8deg) translateY(-30px); }
  100% { transform: rotate(0deg) translateY(0px); }
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
    padding: 8rem 2rem;
  }
}
</style>