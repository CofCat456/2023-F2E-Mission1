<script lang="ts" setup></script>

<template>
  <footer class="bg-colorTheme2 py-16">
    <div class="max-w-footer xl:mx-auto md:mx-9 flex xl:flex-row md:flex-col items-start gap-x-4 gap-y-6">
      <!-- Left box -->
      <div class="flex-1 flex flex-col gap-4">
        <!-- Title -->
        <div class="flex items-center gap-2">
          <div class="relative w-[32px] bg-gradientTheme rounded-full aspect-square">
            <p class="text-white text-xl font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              3
            </p>
          </div>
          <h3 class="text-primaryTheme font-bold">
            喵立翰 Miao Li-Han
          </h3>
        </div>

        <!-- Social Media Btns -->
        <SocialMediaBtns />

        <!-- CopyRight -->
        <div class="text-remark">
          &copy; 2023 喵立翰 Miao Li-Han 版權所有
          <br>
          設計師：Jhen
          <br>
          前端工程師：CofCat
        </div>
      </div>

      <!-- Right box -->
      <div class="flex-1 flex flex-col gap-4">
        <h4>競選總部</h4>
        辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓
        <br>
        電話：(02) 888-5678
        <br>
        電子郵件地址：meowoffice@linmeow.tw
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
