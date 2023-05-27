import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileCardDeprecated } from './ProfileCardDeprecated';

import { Country } from '@/entities/Country/testing';
import { Currency } from '@/entities/Currency/testing';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';
import { avatar } from '@/shared/const/imagePaths';

export default {
  title: 'entities/ProfileCardDeprecated',
  component: ProfileCardDeprecated,
  argTypes: {},
} as ComponentMeta<typeof ProfileCardDeprecated>;

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

const Template: ComponentStory<typeof ProfileCardDeprecated> = (args) => <ProfileCardDeprecated {...args} />;

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
