import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sidebar } from './Sidebar';

import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {},
  parameters: {
    reactRouter: {
      routePath: '/profile/:id',
      routeParams: { id: '1' },
    },
  },
  decorators: [StoreDecorator({ user: { authData: { id: '1' } } })],
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: {} })];
