import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

import { Country } from 'entities/Country';

import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/images/avatar.jpg';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {},
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    first: 'UserName',
    lastname: 'UserLastname',
    age: '20',
    avatar,
    city: 'Moscow',
    username: 'nickname',
    country: Country.Russia,
    currency: Currency.RUB,
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'error',
};
export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
