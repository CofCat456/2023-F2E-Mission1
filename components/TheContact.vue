<script lang="ts" setup>
import { z } from 'zod'
import type { Modal } from '#components'
import { Section } from '~/types'
import type { ContactData, ContactType, FormData } from '~/types'
import { contactList } from '~/data'

const { gsap } = useGsap()
const contactRef = ref<HTMLElement | null>()
const contactBoxsRef = ref<HTMLElement[] | null>(null)
const modalRef = ref<InstanceType<typeof Modal> | null>(null)

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().regex(/^[0-9]{10}$/),
  suggest: z.string(),
})

const isLoading = ref(false)
const isPass = ref(false)
const modalFormType = ref<ContactType>('donate')
const currentDonateNum = ref(0)
const customDonateNum = ref<string>('')
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

async function sendEmail() {
  try {
    await $fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify({ ...formData, type: modalFormType.value }),

    })
    isPass.value = true
    Object.assign(formData, {
      name: '',
      email: '',
      phone: '',
      suggest: '',
    })
  }
  finally {
    isLoading.value = false
  }
}

async function onSubmit() {
  isLoading.value = true

  const validationResult = formSchema.safeParse({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    suggest: formData.suggest,
  })

  if (validationResult.success) {
    if (modalFormType.value === 'donate') {
      setTimeout(() => {
        isLoading.value = false
        isPass.value = true
      }, 1000)
    }
    else {
      await sendEmail()
    }
  }
  else {
    isLoading.value = false
  }
}

watch(customDonateNum, (newNum) => {
  if (newNum === undefined || newNum === '')
    currentDonateNum.value = 0
  else
    currentDonateNum.value = Number.parseInt(newNum)
})

onMounted(() => {
  const timeline = gsap.timeline({
    scrollTrigger: { trigger: contactRef.value, start: 'top center' },
  })

  timeline.fromTo(contactBoxsRef.value, 0.6, { scale: 0 }, { scale: 1, ease: 'expo.inOut' })
})
</script>

<template>
  <section :id="Section.CONTACT" ref="contactRef">
    <ul class="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4">
      <template v-for="contact in contactList" :key="contact.title">
        <li
          ref="contactBoxsRef"
          class="flex flex-col xl:p-24 py-10 px-6 rounded-[32px] text-white xl:border-none border border-[rgba(255,255,255,.3)]"
          :class="`${contact.theme === 'default' ? 'bg-primaryTheme' : 'bg-primary'}`"
        >
          <p class="font-mantou xl:text-[52px] text-[40px] leading-none mb-4">
            {{ contact.title }}
          </p>
          <h5 class="font-semibold mb-6">
            {{ contact.text }}
          </h5>
          <div class="flex-1 flex justify-between items-center gap-2">
            <BasicButton class="bg-white" :theme="contact.theme" @click="openFormModal(contact)">
              {{ contact.btnText }}
            </BasicButton>
            <NuxtImg class="xl:w-1/2 w-[100px] h-auto object-cover" :src="contact.imageUrl" loading="lazy" />
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
      :is-loading="isLoading" :is-pass="isPass"
      @on-submit="onSubmit"
      @on-close="isPass = false"
    >
      <template #form>
        <!-- FIXME: why can not use .numer -->
        <ContactDonate
          v-if="modalFormType === 'donate'"
          v-model:customDonateNum="customDonateNum"
          :current-donate-num="currentDonateNum"
          @set-current-donate-num="price => currentDonateNum = price"
        />
        <ContactService v-else v-model:formData="formData" />
      </template>
      <template #formBtnText>
        {{ modalFormType === 'donate' ? '前往捐款' : '送出意見' }}
      </template>
    </ModalForm>
  </section>
</template>
