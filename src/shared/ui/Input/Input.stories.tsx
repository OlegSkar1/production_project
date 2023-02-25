import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: 'Enter text',
  value: 'text',
};

export const Dark = Template.bind({});
Dark.args = { label: 'Enter text', value: 'text' };

Dark.decorators = [ThemeDecorator(Theme.DARK)];
