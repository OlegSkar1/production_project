import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CountrySelect } from './CountrySelect';

import { Country } from '../model/types/county';

import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  argTypes: {},
  args: {
    direction: 'bottom right',
    value: Country.Russia,
  },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args: any) => <CountrySelect {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];
