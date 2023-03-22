import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

import { Text } from '../Text/Text';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: <Text title='Test title' text='Test text' />,
};

export const Dark = Template.bind({});
Dark.args = {
  children: <Text title='Test title' text='Test text' />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {
  children: <Text title='Test title' text='Test text' />,
};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];
