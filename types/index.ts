// Section

export enum Section {
  ADVOCATE = 'advocate',
  EVENTS = 'events',
  POLICY = 'policy',
  CONTACT = 'contact',
  SLOGAN = 'slogan',
}

export interface Nav {
  id: 'advocate' | 'events' | 'policy' | 'donate' | 'service'
  title: string
  target: Section
}

// Icon
export type Icon = 'fb' | 'ig' | 'line' | 'youtube' | 'twitter'

// Social Media
export enum SocialMedia {
  FB = 'https://www.facebook.com/liao.xiaoan',
  IG = 'https://www.instagram.com/cofcat_0324',
  LINE = 'https://line.me/ti/p/6NK3O8Ih5J',
  YOUTUBE = 'https://www.youtube.com/channel/UCVoZVrWGIICKr_h9XhjL0SQ',
  TWITTER = 'https://twitter.com/CofCat47',
}

// Basic

// Button Theme
export type BtnTheme = 'default' | 'dark'

// Data

export interface Data {
  id?: number
  title: string
  text: string
  date?: string
  imageUrl: string
}

// Contact

// contact block

export type ContactType = 'donate' | 'service'

export interface Donate {
  title: string
  price: number
  donateNum: number
}

export interface Form {
  id: 'name' | 'email' | 'phone' | 'suggest'
  label: string
  type: 'text' | 'email'
  placeholder: string
}

export interface FormData {
  name: string
  email: string
  phone: string
  suggest: string
}

export interface ContactData {
  id: ContactType
  title: string
  text: string
  slogan: string
  btnText: string
  imageUrl: string
  modalImageUrl: string
  theme: BtnTheme
}
