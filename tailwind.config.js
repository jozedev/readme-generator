/** @type {import('tailwindcss').Config} */
import tailwindTypography from '@tailwindcss/typography'
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    [
      tailwindTypography,
      plugin(function ({ addVariant }) {
        addVariant('current', '&.active');
      })
    ],
  ],
}

