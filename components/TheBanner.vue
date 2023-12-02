<script setup lang="ts">
import { inject } from 'vue'

const headerHeight = inject('headerHeight')
</script>

<template>
  <section
    :style="{
      height: `calc(100dvh - ${headerHeight}px)`,
    }"
    class="flex flex-col"
  >
    <div class="text-center inline-block mt-auto">
      <!-- Title -->
      <h2 class="font-mantou text-8xl tracking-[2px] text-gradientTheme font-normal">
        台灣的明天 喵先鋪路
      </h2>

      <!-- Buttons -->
      <div class="font-inter my-4 flex items-center gap-4 justify-center">
        <div class="bg-primary inline-block rounded-2xl py-3 px-4">
          <h3 class="text-white">
            2024 立委參選人
          </h3>
        </div>
        <div class="flex items-center gap-4 border border-white shadow rounded-2xl px-4 py-3">
          <div class="relative w-10 bg-gradientTheme p-3 rounded-full aspect-square">
            <p class="text-white text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              3
            </p>
          </div>
          <h1 class="text-primaryTheme">
            喵立翰 Miao Li-Han
          </h1>
        </div>
      </div>
    </div>

    <!-- Image -->
    <NuxtImg width="723" fit="cover" src="/people_1.png" class="mx-auto" />
  </section>
</template>

<style scoped>
.shadow {
  box-shadow: 0px 4px 12px 0px #A3B4CB33;
}
</style>
