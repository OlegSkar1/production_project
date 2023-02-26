import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink } from './AppLink';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {},
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  theme: 'primary',
};
export const InvertedPrimary = Template.bind({});
InvertedPrimary.args = {
  children: 'Text',
  theme: 'invertedPrimary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
  theme: 'secondary',
};
export const InvertedSecondary = Template.bind({});
InvertedSecondary.args = {
  children: 'Text',
  theme: 'invertedSecondary',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  theme: 'primary',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Text',
  theme: 'secondary',
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedPrimaryDark = Template.bind({});
InvertedPrimaryDark.args = {
  children: 'Text',
  theme: 'invertedPrimary',
};
InvertedPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedSecondaryDark = Template.bind({});
InvertedSecondaryDark.args = {
  children: 'Text',
  theme: 'invertedSecondary',
};
InvertedSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
