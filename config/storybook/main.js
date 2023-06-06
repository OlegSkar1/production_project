module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-interactions',
    'storybook-addon-mock',
    'storybook-addon-react-router-v6',
    'storybook-addon-themes',
  ],
  framework: '@storybook/react',
  staticDirs: ['../../public'],
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
