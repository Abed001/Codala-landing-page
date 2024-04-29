/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      ClashDisplay: ["ClashDisplay", "sans-serif"],
      Manrope: ["Manrope", "sans-serif"],
      Chillax_Complete: ["Chillax_Complete", "sans-serif"],
    },

    colors: {
      dark:'#141414',
      white: '#fff',
      purple: '#8A56F7',
      darkpurple:"#5E4288",
      blackc: '#0C0C0D',
      blue:'#8A56F7',
      lightpurple:'#CBC3E3',
      grey:'#4E4E4E',
      liner:'#2159DC',
     

    },
    extend: {

    },
  },
  plugins: [],
}