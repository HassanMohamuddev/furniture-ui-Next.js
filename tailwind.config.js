/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors:{
      'green-dark':'#384e49',
       'dark':  '#000000',
       'white':'#ffffff',
       'red':' #FF0000',
       'grey':'#808080',
       'yellow':'#FFFF00',
       'whiteGreen':'#DEF8F4',
       'blue-white':'#FFE6DB'

    },
    animation: {
      fade: 'fadeInUp 5s ease-in-out',
    },
    keyframes: theme => ({
      fadeOut: {
        '0%': { backgroundColor: theme('colors.red.300') },
        '100%': { backgroundColor: theme('colors.transparent') },
      },
    }),
  
  },
  plugins: [],
}