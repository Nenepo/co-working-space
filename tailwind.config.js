/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./**/*.{html,js}"],
  theme: {
 
      colors: {
        'orange': '#FE6312',
        'black': '#0C0E12',
        'white': '#FFFFFF',
        'grey': 'rgba(255, 255, 255, 0.50)'
      },
     fontFamily: {
      'source' : ['Source Code Pro','monospace'],
      'raleway': ['Raleway']
     },

     fontSize:{
      '8xl': '80px'
     }
  },
  plugins: [],
 
}

