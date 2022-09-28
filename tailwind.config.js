/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    debugScreens: {
      position: ['top', 'left'],
      },
    extend: {
      fontFamily: {
      headline: ['Oswald']
      },
      colors: {
        mainColor: '#212f49'
      }
    }
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    ],
}
