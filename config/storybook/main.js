// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: [path.resolve(__dirname, '..', '..', 'public')],
};
