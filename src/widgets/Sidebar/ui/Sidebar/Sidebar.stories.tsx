import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sidebar } from './Sidebar';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {},
  decorators: [StoreDecorator({ user: { authData: { id: '1' } } })],
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <div style={{ height: '500px' }}>
    <Sidebar {...args} />
  </div>
);

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

export const RedesignedNormal = Template.bind({});
RedesignedNormal.args = {};
RedesignedNormal.decorators = [NewDesignDecorator];

export const RedesignedDark = Template.bind({});
RedesignedDark.args = {};
RedesignedDark.decorators = [ThemeDecorator(Theme.DARK), NewDesignDecorator];

export const RedesignedOrange = Template.bind({});
RedesignedOrange.args = {};
RedesignedOrange.decorators = [ThemeDecorator(Theme.ORANGE), NewDesignDecorator];

export const RedesignedNoAuth = Template.bind({});
RedesignedNoAuth.args = {};
RedesignedNoAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: {} }), NewDesignDecorator];
