import { ComponentStory, ComponentMeta } from '@storybook/react';

import { rest } from 'msw';

import ProfilePage from './ProfilePage';

import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {},
  parameters: {
    msw: [
      rest.get('/profile', (_req, res, ctx) => {
        return res(
          ctx.json({
            first: 'Oleg',
            lastname: 'Skarednov',
          }),
          ctx.status(200)
        );
      }),
    ],
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args: any) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({ profile: { data: { first: '', lastname: '' } } })];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ profile: { data: { first: '', lastname: '' } } })];
