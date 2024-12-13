import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        csecblue: {
          50: '#eef7ff',
          100: '#daebff',
          200: '#bdddff',
          300: '#90c9ff',
          400: '#5cabff',
          500: '#3588fc',
          600: '#1f69f1',
          700: '#1752de',
          800: '#1944b4',
          900: '#1a3c8e',
          950: '#152656'
        }
      }
    }
  }
}
