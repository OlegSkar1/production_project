import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

import { Country } from '@/entities/Country/testing';
import { Currency } from '@/entities/Currency/testing';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { avatar } from '@/shared/const/imagePaths';
import { Theme } from '@/shared/types';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {},
} as ComponentMeta<typeof ProfileCard>;

const data = {
  first: 'UserName',
  lastname: 'UserLastname',
  age: '20',
  avatar,
  city: 'Moscow',
  username: 'nickname',
  country: Country.Russia,
  currency: Currency.RUB,
};

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data,
};

export const Dark = Template.bind({});
Dark.args = {
  data,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {
  data,
};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];

export const WithError = Template.bind({});
WithError.args = {
  error: 'error',
};
export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
