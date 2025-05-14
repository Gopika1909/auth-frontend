/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'custom-bg': '#131319',
        'card-bg': '#27292D',
        'text-lighter': '#6B6C70',
        'text-light': '#C5C7CA',
        'border-gradient-start': '#969696',
        'border-gradient-end': '#343434',
      },
    },
  },
  plugins: [],
}
