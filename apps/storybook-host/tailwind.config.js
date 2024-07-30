const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    'libs/ui-libs/**/!(*.stories|*.spec).{ts,html}',
    'libs/ui-libs/cards/**/!(*.stories|*.spec).{ts,html}',
    'libs/sprint-retro-auth/**/!(*.stories|*.spec).{ts,html}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
  ],
};
