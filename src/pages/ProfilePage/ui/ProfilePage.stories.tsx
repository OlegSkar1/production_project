import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import ProfilePage from './ProfilePage';

import { Country } from '@/entities/Country/testing';
import { Currency } from '@/entities/Currency/testing';
import { ValidateProfileErrors } from '@/features/EditableProfileCard/testing';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';
import { avatar } from '@/shared/const/imagePaths';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {},
  decorators: [withMock, StoreDecorator({ user: { authData: { id: '2' } } })],
  parameters: {
    reactRouter: {
      routePath: '/profile/:id/',
      routeParams: { id: '1' },
    },
    mockData: {
      url: `${__API__}/profile-ratings?userId=1&profileId=2`,
      method: 'GET',
      delay: '2000',
      status: 200,
      response: [{ userId: '2', profileId: '1', rate: 4 }],
    },
  },
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
