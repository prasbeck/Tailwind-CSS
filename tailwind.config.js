/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    debugScreens: {
      position: ['top', 'left'],
      },
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    ],
}
