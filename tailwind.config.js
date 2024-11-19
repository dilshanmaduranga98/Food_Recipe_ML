/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Josefin': ['Josefin Sans', 'sans-serif'],
        'k2d': ['K2D', 'sans-serif']
      }
    },
  },
  plugins: [],
}