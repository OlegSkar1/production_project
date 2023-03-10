import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CountrySelect } from './CountrySelect';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  argTypes: {},
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args: any) => <CountrySelect {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
