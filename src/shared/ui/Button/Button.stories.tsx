import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  variant: 'clear',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Text',
  variant: 'outlined',
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'Text',
  variant: 'outlined',
};

OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
