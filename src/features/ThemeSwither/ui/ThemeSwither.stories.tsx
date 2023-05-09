import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeSwither } from './ThemeSwither';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'features/ThemeSwither',
  component: ThemeSwither,
  argTypes: {},
} as ComponentMeta<typeof ThemeSwither>;

const Template: ComponentStory<typeof ThemeSwither> = (args) => <ThemeSwither {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];
