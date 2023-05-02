import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CurrencySelect } from './CurrencySelect';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/types';

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  argTypes: {},
  args: {
    direction: 'bottom right',
    value: 'RUB',
  },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args: any) => <CurrencySelect {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];
