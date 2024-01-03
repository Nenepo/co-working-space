/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./**/*.{html,js}"],
  theme: {
 
      colors: {
        'orange': '#FE6312',
        'black': '#0C0E12',
        'white': '#FFFFFF',
        'grey': 'rgba(255, 255, 255, 0.50)',
        'textWhite': 'rgba(255, 255, 255, 0.80)',
        'ash': ' #252626'
      },
     fontFamily: {
      'source' : ['Source Code Pro','monospace'],
      'raleway': ['Raleway']
     },

     fontSize:{
      'xl': '1.25rem',
      '3xl': '1.7rem',
      '4xl': '2.7rem',
      '5xl': '3.5rem',
      '6xl': ['4rem',{
        lineHeight: '4.5rem'
      }]
     },
     borderRadius: {
      'oval': '100%'
     }
  },
  plugins: [],
 
}

