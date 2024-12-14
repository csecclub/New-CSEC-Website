import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        blue: {
        '50': '#f4f6fb',
        '100': '#e8ecf6',
        '200': '#ccd8eb',
        '300': '#9fb7da',
        '400': '#6c92c4',
        '500': '#4974ae',
        '600': '#375b92',
        '700': '#325081',
        '800': '#294063',
        '900': '#273753',
        '950': '#1a2337',
        }
      }
    }
  }
}
