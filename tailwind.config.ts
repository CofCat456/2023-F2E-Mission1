import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primaryTheme: '#DA7D4A',
        primary: '#334155',
        secondary: '#64748B',
        colorTheme1: '#FDFCFB',
        colorTheme2: '#F7ECE1',
        colorTheme3: '#F8FAFC',
        colorTheme4: '#E2E8F0',
        colorTheme5: '#F1F5F9',
        colorTheme6: '#E3F8FF',
      },
      letterSpacing: {
        2: '0.125em',
      },
      maxWidth: {
        '2.5xl': '43.5rem',
        '8xl': '82.5rem',
        'footer': '85.5rem',
      },
    },
    fontFamily: {
      mantou: ['Mantou Sans', 'Mantou Sans fallback', ...fontFamily.sans],
      inter: ['Inter', 'Inter fallback', ...fontFamily.sans],
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
