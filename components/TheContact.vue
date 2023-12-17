<script lang="ts" setup>
import type { BasicModal } from '#components'
import type { ContactData, ContactType, FormData } from '~/types'
import { contactList } from '~/data'

const { gsap } = useGsap()

const contactRef = ref<HTMLElement | null>()
const contactBoxsRef = ref<HTMLElement[] | null>(null)
const modalRef = ref<InstanceType<typeof BasicModal> | null>(null)

const isLoading = ref(false)
const isPass = ref(false)
const modalFormType = ref<ContactType>('donate')
const currentDonateNum = ref(0)
const customDonateNum = ref<number>(0)
const formData: FormData = reactive({
  name: '',
  email: '',
  phone: '',
  suggest: '',
})

const selectContact: ContactData = reactive({
  id: 'donate',
  title: '',
  text: '',
  slogan: '',
  btnText: '',
  imageUrl: '',
  modalImageUrl: '',
  theme: 'default',
})

// provide
provide('modalRef', modalRef)

const isValidation = computed(() => formData.name !== '' && formData.email !== '' && formData.phone !== '' && formData.suggest !== '')

const isSelected = computed(() => currentDonateNum.value > 0)

function openFormModal(contact: ContactData) {
  Object.assign(selectContact, contact)
  modalFormType.value = contact.id
  modalRef.value?.open()
}

function onSubmit() {
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
    isPass.value = true
  }, 1000)
}

watch(customDonateNum, (newNum) => {
  if (newNum === undefined)
    currentDonateNum.value = 0
  else
    currentDonateNum.value = newNum
})

onMounted(() => {
  const timeline = gsap.timeline({
    scrollTrigger: { trigger: contactRef.value, start: 'top center' },
  })

  timeline.fromTo(contactBoxsRef.value, 0.6, { scale: 0 }, { scale: 1, ease: 'expo.inOut' })
})
</script>

<template>
  <section ref="contactRef" class="max-w-8xl py-block mx-auto">
    <ul class="grid grid-cols-2 gap-x-6">
      <template v-for="contact in contactList" :key="contact.title">
        <li
          ref="contactBoxsRef"
          class="card"
          :class="`${contact.theme === 'default' ? 'bg-primaryTheme' : 'bg-primary'}`"
        >
          <p class="text-title mb-4">
            {{ contact.title }}
          </p>
          <h5 class="font-semibold mb-6">
            {{ contact.text }}
          </h5>
          <div class="flex-1 flex justify-between items-center">
            <BasicButton class="bg-white" :theme="contact.theme" @click="openFormModal(contact)">
              {{ contact.btnText }}
            </BasicButton>
            <NuxtImg class="max-w-full h-auto" densities="x1" :src="contact.imageUrl" />
          </div>
        </li>
      </template>
    </ul>

    <!-- Modal -->
    <ModalForm
      title="小額捐款"
      :data="selectContact"
      :data-list="contactList"
      :btn-status="isSelected || isValidation"
      :is-loading="isLoading"
      :is-pass="isPass"
      @on-submit="onSubmit"
      @on-close="isPass = false"
    >
      <template #form>
        <!-- FIXME: why can not use .numer -->
        <ContactDonate
          v-if="modalFormType === 'donate'"
          v-model:customDonateNum="customDonateNum"
          :current-donate-num="currentDonateNum"
        />
        <ContactService
          v-else
          v-model:formData="formData"
        />
      </template>
      <template #formBtnText>
        {{ modalFormType === 'donate' ? '前往捐款' : '送出意見' }}
      </template>
    </ModalForm>
  </section>
</template>

<style scoped>
.card {
  @apply flex flex-col p-24 rounded-[32px] text-white
}
</style>
