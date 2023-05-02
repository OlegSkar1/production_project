import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from '../Text/Text';

import { Card } from './Card';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/types';

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
