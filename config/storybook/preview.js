import { addDecorator } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { FeatureFlagsDecorator } from '../../src/shared/config/storybook/FeatureFlagsDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator';

import { Theme } from '@/shared/const/Theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: Theme.LIGHT, color: '#fff' },
      { name: 'dark', class: Theme.DARK, color: '#000' },
      { name: 'blue', class: Theme.BLUE, color: '#00aced' },
      { name: 'orange', class: Theme.ORANGE, color: 'orange' },
    ],
  },
};

addDecorator(StyleDecorator);
addDecorator(TranslationDecorator);
addDecorator(withRouter);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(FeatureFlagsDecorator({}));
