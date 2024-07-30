const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    'libs/planning-poker-auth/src/lib/**/!(*.stories|*.spec).{ts,html}'
  ],
  theme: {
    extend: {
      colors: {
        // text
        black: '#1a2935',
        blue: {
          light: '#74b3ff',
          DEFAULT: '#3993ff',
          dark: '#232876'
        },
        indigo: '#1A2935',
        gray: '#e8e9ea',
        slate: 'rgb(168, 174, 178)'
      },
      fontWeight: {
        // font
        light: '300',
        normal: '400',
        bold: '700'
      },
      lineHeight: {
        // leading
        tight: '1.1em',
        normal: '1.3em',
        relaxed: '1.4em'
      },
      letterSpacing: {
        // tracking,
        tight: '0em',
        normal: '0.02em',
        wide: '.04em'
      },
      backdropBlur: {
        xs: '1.5px'
      }
    },
    screens: {
      md: '640px',
      lg: '1024px',
      xl: '1280px'
    }
  },
  plugins: []
};
