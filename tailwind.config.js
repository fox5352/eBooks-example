/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
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
        BubbleGum: {
          100: "#C1C7FF",
          200: "#9EA9FF",
          300: "#798AFF",
          400: "#5469FF",
          500: "#2543FF",
          600: "#0028D7",
          700: "#001A99",
          800: "#000C60",
        },
        Cool :{
          100:"#52D8FF",
          200:"#00BFE3",
          300:"#00A1C1",
          400:"#00859F",
          500:"#00697F",
          600:"#004F60",
          700:"#003462",
          800:"#001F27",
        }
      }
    },
  },
  plugins: [],
}

