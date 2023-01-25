/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'slightly-slate': '#E1D7C6'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
  darkMode: 'class'
}