import { addDecorator } from '@storybook/react';

import { withRouter } from 'storybook-addon-react-router-v6';

import { Theme } from '../../src/shared/ui/ThemeProvider';

import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(TranslationDecorator);
// addDecorator(RouterDecorator);
addDecorator(withRouter);
addDecorator(ThemeDecorator(Theme.LIGHT));
