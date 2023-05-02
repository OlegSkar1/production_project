import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink } from './AppLink';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/types';

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

export const PrimaryBlue = Template.bind({});
PrimaryBlue.args = {
  children: 'Text',
  theme: 'primary',
};
PrimaryBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Text',
  theme: 'secondary',
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryBlue = Template.bind({});
SecondaryBlue.args = {
  children: 'Text',
  theme: 'secondary',
};
SecondaryBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const InvertedPrimaryDark = Template.bind({});
InvertedPrimaryDark.args = {
  children: 'Text',
  theme: 'invertedPrimary',
};
InvertedPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedPrimaryBlue = Template.bind({});
InvertedPrimaryBlue.args = {
  children: 'Text',
  theme: 'invertedPrimary',
};
InvertedPrimaryBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const InvertedSecondaryDark = Template.bind({});
InvertedSecondaryDark.args = {
  children: 'Text',
  theme: 'invertedSecondary',
};
InvertedSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedSecondaryBlue = Template.bind({});
InvertedSecondaryBlue.args = {
  children: 'Text',
  theme: 'invertedSecondary',
};
InvertedSecondaryBlue.decorators = [ThemeDecorator(Theme.BLUE)];
