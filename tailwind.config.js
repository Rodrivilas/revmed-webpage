/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FC9807',
          100: '#ffd495'
        },
        secondary: {
          DEFAULT: '#DF3F00',
          100: '#dc9174'
        },
        error: '#C14D4D',
        success: '#8DD486'
      },
      fontFamily: {
        'nunito': ['"Nunito"', 'sans-serif'],
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
        'roboto-flex': ['"Roboto Flex"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}