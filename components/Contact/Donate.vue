<script lang="ts" setup>
import { donatePlanList } from '~/data'

const props = defineProps<{
  currentDonateNum: number
  customDonateNum: string
}>()

const emit = defineEmits<{
  'setCurrentDonateNum': [num: number]
  'update:customDonateNum': [num: number | string]
}>()

function selectPlan(price: number) {
  emit('setCurrentDonateNum', price)
}

const modelDonateNum = computed({
  get: () => props.customDonateNum,
  set: val => emit('update:customDonateNum', val),
})
</script>

<template>
  <h5>
    捐款方案
  </h5>
  <ul class="my-4 flex flex-col gap-4">
    <li
      v-for="{ title, price, donateNum } in donatePlanList"
      :key="title"
      class="flex sm:flex-nowrap flex-wrap justify-between items-center gap-y-2 py-6 px-4 rounded-2xl border-2 border-colorTheme4 transition-colors group cursor-pointer"
      :class="(currentDonateNum === price) && (customDonateNum === undefined || Number(customDonateNum) <= 0) ? 'border-primaryTheme' : 'hover:border-primaryTheme'"
      @click="selectPlan(price)"
    >
      <h5 class="sm:w-auto w-full text-primaryTheme transition-colors">
        {{ title }}
      </h5>
      <div class="sm:w-auto w-full flex flex-wrap justify-between items-center gap-x-6 gap-y-2">
        <h4 class="inline-flex justify-end items-center">
          <span class="mr-2 font-normal text-base">NT$</span>{{ currency(price, '') }}
        </h4>
        <p class="text-remark text-secondary">
          已有 {{ currency(donateNum) }} 人贊助
        </p>
      </div>
    </li>
    <li
      class="flex flex-col py-6 px-4 rounded-2xl border-2 border-colorTheme4 hover:border-primaryTheme transition-colors group cursor-pointer"
      :class="Number(customDonateNum) > 0 ? 'border-primaryTheme' : 'hover:border-primaryTheme'"
    >
      <h5 class="flex-1 text-primaryTheme transition-colors">
        自訂贊助金額
      </h5>
      <input
        v-model.number="modelDonateNum"
        type="number"
        class="flex-1 text-left mt-2 rounded-lg py-4 px-[15px] bg-colorTheme5"
        placeholder="NT$ 輸入金額"
      >
    </li>
  </ul>
</template>
