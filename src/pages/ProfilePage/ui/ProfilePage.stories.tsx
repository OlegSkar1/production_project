import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfilePage from './ProfilePage';

import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { avatar } from 'shared/const/imagePaths';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {},
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args: any) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        first: 'UserName',
        lastname: 'UserLastname',
        age: '20',
        avatar,
        city: 'Moskow',
        username: 'nickname',
        country: Country.Russia,
        currency: Currency.RUB,
      },
      readonly: true,
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        first: 'UserName',
        lastname: 'UserLastname',
        age: '20',
        avatar,
        city: 'Moskow',
        username: 'nickname',
        country: Country.Russia,
        currency: Currency.RUB,
      },
      readonly: true,
    },
  }),
];
