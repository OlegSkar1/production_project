import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: '123', content: 'Первый пункт' },
    { value: '12345', content: 'Второй пункт' },
  ],
  label: 'Укажите значение',
};

export const Dark = Template.bind({});
Dark.args = {
  options: [
    { value: '123', content: 'Первый пункт' },
    { value: '12345', content: 'Второй пункт' },
  ],
  label: 'Укажите значение',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {
  options: [
    { value: '123', content: 'Первый пункт' },
    { value: '12345', content: 'Второй пункт' },
  ],
  label: 'Укажите значение',
};

Blue.decorators = [ThemeDecorator(Theme.BLUE)];
