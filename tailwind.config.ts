import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primaryTheme: '#DA7D4A',
        primary: '#334155',
        secondary: '##64748B',
        colorTheme1: '#FDFCFB',
        colorTheme2: '#F7ECE1',
      },
    },
    fontFamily: {
      mantou: ['"Mantou Sans"', 'sans-serif'],
    },
  },
}
