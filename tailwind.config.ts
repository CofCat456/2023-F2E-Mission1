import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primaryTheme: '#DA7D4A',
        primary: '#334155',
        secondary: '#64748B',
        colorTheme1: '#FDFCFB',
        colorTheme2: '#F7ECE1',
      },
      letterSpacing: {
        2: '0.125em',
      },
      maxWidth: {
        '8xl': '82.5rem',
      },
      padding: {
        block: '104px',
      },
    },
    fontFamily: {
      mantou: ['"Mantou Sans"', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
}
