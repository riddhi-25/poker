const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    'libs/sprint-retro-auth/src/lib/**/*.{ts,html}'
  ],
  theme: {
    // screens: {
    //   'sm': '768px',
    //   'md': '992px',
    // },
    // backgroundColor: {
    //   'body': '#f7fafd', 
    //   'boardTopBar_topBar': '#f7fafd'
    // },
    // fontFamily: {
    //   'body': ['Poppins', 'sans-serif'], 
    // },
    extend: {
      margin: {
        'left-85': '85px', 
        'left-108': '108px', 
        'left-143': '143px', 
        'marginTop': '15px'
      },
      margin_top: {
        '5': '5px', 
        '15': '15px', 
      },
      width: {
        'calc-100-minus-90': 'calc(100% - 90px)', 
        'calc-100-minus-119': 'calc(100% - 119px)', 
        'calc-100-minus-165': 'calc(100% - 165px)',
        'calc-100-minus-86': 'calc(100% - 86px)', 
      },
      screens: {
        'lg': '1200px',
      },
    },
  },
  plugins: [],
};

