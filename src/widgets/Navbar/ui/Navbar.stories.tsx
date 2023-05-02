import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navbar } from './Navbar';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/types';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const DarkAuth = Template.bind({});
DarkAuth.args = {};
DarkAuth.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ user: { authData: { id: '1', username: 'admin' } } }),
];

export const BlueAuth = Template.bind({});
BlueAuth.args = {};
BlueAuth.decorators = [
  ThemeDecorator(Theme.BLUE),
  StoreDecorator({ user: { authData: { id: '1', username: 'admin' } } }),
];
