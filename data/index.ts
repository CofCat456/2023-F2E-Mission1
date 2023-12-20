import { type ContactData, type Data, type Donate, type Form, type Nav, Section } from '~/types'

export const navList: Nav[] = [
  {
    title: '候選人主張',
    target: Section.ADVOCATE,
  },
  {
    title: '最新活動',
    target: Section.EVENTS,
  },
  {
    title: '政策議題',
    target: Section.POLICYISSUSE,
  },
  {
    title: '小額捐款',
    target: Section.CONTACT,
  },
  {
    title: '民眾服務信箱',
    target: Section.CONTACT,
  },
]

export const eventList: Data[] = [
  {
    id: Math.random() + 1,
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    text: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
    date: '2023/12/26',
    imageUrl: '/img_events1.png',
  },
  {
    id: Math.random() + 2,
    title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
    text: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！',
    date: '2023/12/24',
    imageUrl: '/img_events2.png',
  },
  {
    id: Math.random() + 3,
    title: '收容所模特兒大比拼！',
    text: '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
    date: '2023/12/20',
    imageUrl: '/img_events3.png',
  },
  {
    id: Math.random() + 4,
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    text: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！',
    date: '2023/12/26',
    imageUrl: '/img_events4.png',
  },
]

export const policyList: Data[] = [
  {
    id: Math.random() + 1,
    title: '為毛孩子謀福利！\n推動寵物醫療保障方案',
    text: '',
    imageUrl: 'img_policy1.png',
  },
  {
    id: Math.random() + 2,
    title: '打造休閒天堂！\n推廣寵物休閒與娛樂場所',
    text: '',
    imageUrl: 'img_policy2.png',
  },
  {
    id: Math.random() + 3,
    title: '推廣寵物飼養教育，讓愛更加專業',
    text: '',
    imageUrl: 'img_policy3.png',
  },
]

export const contactList: ContactData[] = [
  {
    id: 'donate',
    title: '小額支持喵喵',
    text: '您的小筆捐款，是每隻毛孩未來的大大動力!',
    slogan: '您的小筆捐款，是每隻毛孩未來的大大動力!',
    btnText: '小額捐款',
    imageUrl: '/img_donate.png',
    modalImageUrl: '/img_donate.png',
    theme: 'default',
  },
  {
    id: 'service',
    title: '民眾服務信箱',
    text: '親愛的鄉親，每一位市民的意見都是我們社區前進的原動力',
    slogan: '分享您的想法，一同為我們的未來打造更美好！',
    btnText: '填寫表單',
    imageUrl: '/img_email.png',
    modalImageUrl: '/img_service.png',
    theme: 'dark',
  },
]

export const donatePlanList: Donate[] = [
  {
    title: '喵星人之友',
    price: 600,
    donateNum: 9957,
  },
  {
    title: '喵星大使',
    price: 6000,
    donateNum: 2000,
  },
  {
    title: '喵星傳奇',
    price: 60000,
    donateNum: 999,
  },
]

export const formList: Form[] = [
  {
    id: 'name',
    label: '您的姓名',
    type: 'text',
    placeholder: '姓名',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'email',
  },
  {
    id: 'phone',
    label: '手機',
    type: 'text',
    placeholder: '手機號碼',
  },
]
