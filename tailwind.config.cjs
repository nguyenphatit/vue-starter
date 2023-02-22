/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ['Anton', 'Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
