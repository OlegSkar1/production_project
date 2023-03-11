import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginForm from './LoginForm';

import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({ loginForm: { username: 'admin', password: 'asd' } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({ loginForm: { username: 'admin', password: 'asd' } }), ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {};
Blue.decorators = [StoreDecorator({ loginForm: { username: 'admin', password: 'asd' } }), ThemeDecorator(Theme.BLUE)];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({ loginForm: { username: 'admin', password: 'asd', error: 'ERROR' } })];

export const WithLoading = Template.bind({});
WithLoading.args = {};
WithLoading.decorators = [StoreDecorator({ loginForm: { isLoading: true } })];
