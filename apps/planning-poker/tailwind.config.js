const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    margin:{
      'm-0':'0px',
      'm-b-8':'8px',
      'm-b-4':'4px',
      'm-t-16':'16px'
    },
    borderRadius:{
      'sm':'1px',
      'l':'8px',
      'xl':'16px',
      'xxl':'20px'
    },
    gridTemplateColumns:{
      'equal':'1fr 1fr'
    },
    colors:{
      'white':'#fff',
      'black':'#020617',
      'blue-dark':'#12334e',
      'green':{
        950:'#073b3a',
        800:'#008077',
        400:'#29e8ae',
      }
    },
    fontFamily:{
      'font-lexend':'lexend,sans-sarif',
      'font-inter':'inter',
      },
    fontSize:{
      'text-xs':'16px',
      'text-common':'16px',
      'text-4xl':'36px',
      'text-3xl':'32px',
    },
    fontWeight:{
      'font-light':300,
      'font-medium':500,
      'font-semibold':600,
    },
    lineHeight:{
      'lg':'24px',
      'xl':'36px',
      'xxl':'52px',
    },
    outlineColor:{
      'outline-green-400':'#29e8ae',
      'outline-blue-dark':'#12334e',
    },
    opacity:{
      '100':'1',
      '0':'0'
    },
    screens:{
      'phone': '640px',
      'tablet': '900px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
    extend: {},
  },
  plugins: [],
};
