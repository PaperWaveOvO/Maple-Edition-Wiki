<template>
  <a href="/" 
     class="home-card block w-90 h-60 rounded-[1.8rem] transition-all duration-300 ease-in-out hover:ring-2 hover:ring-[#ee8345] active:brightness-90"
     :style="{ backgroundColor: extraLightColor }">
    
    <div class="p-[0.7rem] flex flex-col items-center justify-center h-full">
      <div class="flex w-full h-20 rounded-[1.1rem] p-[0.7rem] items-start justify-center"
           :style="{ backgroundColor: darkColor }">
        <div class="w-1"></div>

        <div class="h-full flex flex-col items-start justify-center">
          <span class="text-[#ffffff] font-bold text-2xl">{{ name }}</span>
          <div class="flex items-start" v-html="starsHtml"></div>
        </div>

        <div class="flex-1"></div>

        <div class="flex bg-white w-20 h-full rounded-[0.4rem] overflow-hidden relative">
          <img v-if="imgSrc" 
               :src="imgSrc" 
               :style="imgStyle" 
               class="absolute max-w-none" 
               alt="entity-img" />
        </div>
      </div>

      <div class="flex-1 flex flex-col items-center justify-center px-3 gap-0.5">
        <span class="font-bold text-1xl" :style="{ color: darkColor }">技能</span>
        <div class="text-black text-[1.15rem] text-center" v-html="skillHtml"></div>
      </div>
    </div>
  </a>
</template>

<script setup>
defineProps({
  name: String,
  darkColor: String,        // 深色（标题栏、技能字色）
  extraLightColor: String,  // 超浅色（卡片背景）
  starsHtml: String,        // 星级 span 代码
  skillHtml: String,        // 技能 span 代码
  imgSrc: String,           // 图片路径
  imgStyle: {               // 图片样式对象，例如 { width: '120%', top: '-10px' }
    type: Object,
    default: () => ({ width: '100%', height: '100%', objectFit: 'cover' })
  }
})
</script>