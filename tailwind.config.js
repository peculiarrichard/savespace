/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
     "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
     colors: {
      nav: "#F6F9FF",
      blue2: "#0247FE",
      blue3: "#00054D",
      white: "white",
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    fontSize: {
      sm: ['1rem', '1.1875rem'],
      ss: ['1.25rem', '1.625rem'],
      base: ['1.5rem', '1.9375rem'],
    },

    fontWeight: {
      thin: '400',
      hairline: '700',
      extralight: '200',
      light: '300',
    },
    screens: {
      'sm': {'max': '639px'},
      'md': '768px',
      'lg': '992px',
      'xl': '1200px'
    },
     extend: {},
   },
   plugins: [],
 }

