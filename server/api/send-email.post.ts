// server/api/send-email.post.ts
import nodemailer from 'nodemailer'
import { useCompiler } from '#vue-email'

const runtimeConfig = useRuntimeConfig()
const { gmailAppUserMail, gmailAppPassword } = runtimeConfig

export default defineEventHandler(async (event) => {
  const { name, email, phone } = await readBody(event)
  const template = await useCompiler('ServiceTemplate.vue', {
    props: {
      name,
      phone,
    },
  })

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: gmailAppUserMail,
      pass: gmailAppPassword,
    },
  })

  await transporter.sendMail({
    from: `喵立翰 <${gmailAppUserMail}>`,
    to: [email],
    subject: `感謝${name} 您寶貴的意見`,
    html: template.html,
    text: template.text,
  })

  return { message: 'Email sent' }
})
