<script lang="ts" setup>
import { formList } from '~/data'
import type { FormData } from '~/types'

const props = defineProps<{
  formData: FormData
}>()

const emit = defineEmits<{
  'update:formData': [data: FormData]
}>()

const modelFormData = computed({
  get: () => props.formData,
  set: val => emit('update:formData', val),
})
</script>

<template>
  <ul class="grid gap-y-6 mb-6">
    <!-- inputs -->
    <li v-for="item in formList" :key="item.label" class="grid gap-y-2">
      <label :for="item.id" class="sm:text-[20px] text-[20px] font-bold leading-normal">{{ item.label }}</label>
      <input
        v-model="modelFormData[item.id]"
        :name="item.id"
        :type="item.type"
        class="text-left rounded-lg py-4 px-[15px] bg-colorTheme5"
        :placeholder="item.placeholder"
      >
    </li>

    <!-- textarea -->
    <li class="grid gap-y-2">
      <label for="name" class="sm:text-[20px] text-[20px] font-bold leading-normal">您的建言</label>
      <textarea
        v-model="modelFormData.suggest"
        rows="6"
        class="text-left rounded-lg py-4 px-[15px] bg-colorTheme5"
        placeholder="輸入內容"
      />
    </li>
  </ul>
</template>
