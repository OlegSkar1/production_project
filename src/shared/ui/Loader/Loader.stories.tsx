import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from './Loader';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {};

Blue.decorators = [ThemeDecorator(Theme.BLUE)];
