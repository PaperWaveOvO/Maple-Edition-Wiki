<template>
    <a href="/"
        class="home-card block w-full h-65 rounded-[1.8rem] transition-all duration-300 ease-in-out hover:ring-2 hover:ring-[#ee8345] active:ring-[#ee8345] hover:shadow-xl active:shadow-xl"
        :style="cssVariables">

        <div class="p-[0.7rem] flex flex-col items-center justify-center h-full">
            <div class="header-bar flex w-full h-20 rounded-[1.1rem] p-[0.7rem] items-start justify-center">
                <div class="w-1"></div>
                <div class="h-full flex flex-col items-start justify-center">
                    <span class="text-white font-bold text-2xl">{{ name }}</span>
                    <div class="stars-container flex items-start" v-html="starsHtml"></div>
                </div>
                <div class="flex-1"></div>
                <div class="flex bg-white w-20 h-full rounded-[0.4rem] overflow-hidden relative">
                    <img v-if="imgSrc" :src="imgSrc" :style="imgStyle" class="absolute max-w-none" alt="entity-img" />
                </div>
            </div>

            <div class="flex-1 flex flex-col items-center justify-center px-3 gap-0.5">
                <span class="skill-title font-bold text-1xl">{{ skillLabel }}</span>
                <div class="skill-content text-[1.15rem] text-center" v-html="skillHtml"></div>
            </div>
        </div>
    </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    name: String,
    imgSrc: String,
    imgStyle: Object,
    starsHtml: String,
    skillLabel: {
        type: String,
        default: '技能'
    },
    skillHtml: String,
    // 颜色定义
    lightPrimary: String,    // 浅色主色
    lightSecondary: String,  // 浅色二级颜色
    lightTertiary: String,   // 浅色三级颜色
    darkPrimary: String,     // 深色主色
    darkSecondary: String,   // 深色二级颜色
    darkTertiary: String     // 深色三级颜色
})

// 将 Props 映射为 CSS 变量
const cssVariables = computed(() => ({
    '--light-tertiary': props.lightTertiary,
    '--light-secondary': props.lightSecondary,
    '--light-primary': props.lightPrimary,
    '--dark-tertiary': props.darkTertiary,
    '--dark-secondary': props.darkSecondary,
    '--dark-primary': props.darkPrimary,
}))
</script>

<style scoped>
/* --- 1. 基础颜色绑定 (亮色模式) --- */
.home-card {
    background-color: var(--light-tertiary);
}

.header-bar {
    background-color: var(--light-primary);
}

.skill-title {
    color: var(--light-primary);
}

:deep(.stars-container) {
    color: var(--star-color);
}

/* --- 2. 暗色模式适配 --- */
:where(.dark) .home-card {
    background-color: var(--dark-tertiary);
}

:where(.dark) .header-bar {
    background-color: var(--dark-primary);
}

:where(.dark) .skill-title {
    color: var(--dark-primary);
}

:where(.dark) :deep(.stars-container) {
    color: var(--dark-secondary);
}

/* --- 3. 重点：处理点击变色 (利用 color-mix 和 CSS 变量) --- */
.home-card:active {
    /* 亮色模式：背景变深 10% */
    background-color: color-mix(in srgb, var(--light-tertiary), black 10%) !important;
}

:where(.dark) .home-card:active {
    /* 暗色模式：背景变浅/亮 10% */
    background-color: color-mix(in srgb, var(--dark-tertiary), white 10%) !important;
}
</style>