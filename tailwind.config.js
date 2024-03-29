/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
        pop: ['Poppins', 'sans-serif'],
        qs: ['Quicksand', 'sans-serif'],
        ws: ['Work Sans', 'sans-serif'],
        rale: ['Raleway', 'sans-serif']
      },

      colors : {
        primary: '#13747D',
        secondary: '#231F20'
      }
    },
  },
  plugins: [],
}

