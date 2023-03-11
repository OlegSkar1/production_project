import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfilePage from './ProfilePage';

import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { ValidateProfileErrors } from 'features/EditableProfileCard';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { avatar } from 'shared/const/imagePaths';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {},
} as ComponentMeta<typeof ProfilePage>;

const form = {
  first: 'UserName',
  lastname: 'UserLastname',
  age: '20',
  avatar,
  city: 'Moskow',
  username: 'nickname',
  country: Country.Russia,
  currency: Currency.RUB,
};

const Template: ComponentStory<typeof ProfilePage> = (args: any) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {
      form,
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
      form,
      readonly: true,
    },
  }),
];

export const Blue = Template.bind({});
Blue.args = {};
Blue.decorators = [
  ThemeDecorator(Theme.BLUE),
  StoreDecorator({
    profile: {
      form,
      readonly: true,
    },
  }),
];

export const WithNoData = Template.bind({});
WithNoData.args = {};
WithNoData.decorators = [
  StoreDecorator({
    profile: {
      form: {},
      readonly: true,
      validateErrors: [ValidateProfileErrors.NO_DATA],
    },
  }),
];

export const WithInvalidName = Template.bind({});
WithInvalidName.args = {};
WithInvalidName.decorators = [
  StoreDecorator({
    profile: {
      form: { ...form, first: '', lastname: '' },
      readonly: true,
      validateErrors: [ValidateProfileErrors.INCORRECT_DATA],
    },
  }),
];

export const WithInvalidAge = Template.bind({});
WithInvalidAge.args = {};
WithInvalidAge.decorators = [
  StoreDecorator({
    profile: {
      form: { ...form, age: undefined },
      readonly: true,
      validateErrors: [ValidateProfileErrors.INCORRECT_AGE],
    },
  }),
];

export const WithInvalidAll = Template.bind({});
WithInvalidAll.args = {};
WithInvalidAll.decorators = [
  StoreDecorator({
    profile: {
      form: { ...form, age: undefined, first: '', lastname: '' },
      readonly: true,
      validateErrors: [ValidateProfileErrors.INCORRECT_DATA, ValidateProfileErrors.INCORRECT_AGE],
    },
  }),
];
