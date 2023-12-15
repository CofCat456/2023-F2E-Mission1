<script setup lang="ts">
const navList = [
  '候選人主張',
  '最新活動',
  '政策議題',
  '小額捐款',
  '民眾服務信箱',
]

const headerRef = inject('headerRef')
</script>

<template>
  <div ref="headerRef" class="bg-colorTheme1 w-full px-6 py-4">
    <div class="sticky bg-white border w-full border-white px-6 py-3 rounded-2xl flex justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-3 text-primaryTheme">
        <NuxtImg sizes="32px" src="/logo.svg" />
        <h4>
          喵立翰 Miao Li-Han
        </h4>
      </div>

      <!-- Nav -->
      <nav class="menu my-auto">
        <ul class="flex items-center gap-4">
          <template v-for="nav in navList" :key="nav">
            <li class="gap-3 cursor-pointer rounded-lg text-primary hover:text-primaryTheme">
              <h6>
                {{ nav }}
              </h6>
            </li>
          </template>
        </ul>
      </nav>

      <!-- Social Media Btns -->
      <SocialMediaBtns />
    </div>
  </div>
</template>
