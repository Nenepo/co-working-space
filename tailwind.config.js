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
        'ash': ' #252626',
        'off-white': '#FFF8F4',
        'header-text': ' #06060B',
        'text': ' #0C0E12CC ',
        'pink': '  #FFEFE7'
      },
     fontFamily: {
      'source' : ['Source Code Pro','monospace'],
    
      'raleway': ['Raleway']
     },

     fontSize:{
      'xl': '1.25rem',
      '2xl': '28px',
      '3xl': '1.8rem',
      '4xl': '2.7rem',
      '5xl': '3rem',
      '6xl': ['4rem',{
        lineHeight: '4.5rem'
      }]
     },
     borderRadius: {
      'oval': '100%',
      'full': '50%'
      
     },
    
    gridTemplateRows: {
      'auto' : 'repeat(6, 100px)'
    }
  },
  plugins: [],
 
}

