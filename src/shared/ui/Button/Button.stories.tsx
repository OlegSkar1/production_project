import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  variant: 'clear',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Text',
  variant: 'outlined',
};

export const OutlinedSizeLarge = Template.bind({});
OutlinedSizeLarge.args = {
  children: 'Text',
  variant: 'outlined',
  size: 'large',
};

export const OutlinedSizeExtraLarge = Template.bind({});
OutlinedSizeExtraLarge.args = {
  children: 'Text',
  variant: 'outlined',
  size: 'extraLarge',
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'Text',
  variant: 'outlined',
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedInverted = Template.bind({});
OutlinedInverted.args = {
  children: 'Text',
  variant: 'outlinedInverted',
};

export const OutlinedInvertedDark = Template.bind({});
OutlinedInvertedDark.args = {
  children: 'Text',
  variant: 'outlinedInverted',
};

OutlinedInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  variant: 'background',
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  variant: 'backgroundInverted',
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  square: true,
  variant: 'backgroundInverted',
};
export const SquareSizeLarge = Template.bind({});
SquareSizeLarge.args = {
  children: '>',
  square: true,
  size: 'large',
  variant: 'backgroundInverted',
};
export const SquareSizeExtraLarge = Template.bind({});
SquareSizeExtraLarge.args = {
  children: '>',
  size: 'extraLarge',
  square: true,
  variant: 'backgroundInverted',
};
export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text',
  variant: 'outlined',
  disabled: true,
};
