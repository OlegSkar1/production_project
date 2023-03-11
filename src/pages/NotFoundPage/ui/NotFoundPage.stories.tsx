import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotFoundPage } from './NotFoundPage';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {},
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args: any) => <NotFoundPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];
