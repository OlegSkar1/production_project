import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink } from './AppLink';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

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
  variant: 'primary',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  variant: 'primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryBlue = Template.bind({});
PrimaryBlue.args = {
  children: 'Text',
  variant: 'primary',
};
PrimaryBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
  variant: 'red',
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Text',
  variant: 'red',
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryBlue = Template.bind({});
SecondaryBlue.args = {
  children: 'Text',
  variant: 'red',
};
SecondaryBlue.decorators = [ThemeDecorator(Theme.BLUE)];
