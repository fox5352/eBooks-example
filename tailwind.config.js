/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: "class",
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        cherry: {
          100: '#FFB8C1',
          200: '#FF8D9F',
          300: '#FF567B',
          400: '#E32E60',
          500: '#BF0548',
          600: '#930035',
          700: '#680023',
          800: '#400012',
        },
        ruby: "#4B0F19",
      }
    },
  },
  plugins: [],
}

