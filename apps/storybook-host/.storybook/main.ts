import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/app/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../libs/ui-libs/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../apps/planning-poker/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    
    '../../../libs/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../libs/planning-poker-auth/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/angular', 
    options: {},
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
