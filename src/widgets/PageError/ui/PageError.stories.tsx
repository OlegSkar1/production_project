import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageError } from './PageError';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/types';

export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {},
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];
