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

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  variant: 'clear',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  variant: 'clear',
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearBlue = Template.bind({});
ClearBlue.args = {
  children: 'Text',
  variant: 'clear',
};
ClearBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Text',
  variant: 'outlined',
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'Text',
  variant: 'outlined',
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedBlue = Template.bind({});
OutlinedBlue.args = {
  children: 'Text',
  variant: 'outlined',
};
OutlinedBlue.decorators = [ThemeDecorator(Theme.BLUE)];

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

export const OutlinedInvertedBlue = Template.bind({});
OutlinedInvertedBlue.args = {
  children: 'Text',
  variant: 'outlinedInverted',
};
OutlinedInvertedBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  variant: 'background',
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  children: 'Text',
  variant: 'background',
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundBlue = Template.bind({});
BackgroundBlue.args = {
  children: 'Text',
  variant: 'background',
};
BackgroundBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  variant: 'backgroundInverted',
};

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
  children: 'Text',
  variant: 'backgroundInverted',
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInvertedBlue = Template.bind({});
BackgroundInvertedBlue.args = {
  children: 'Text',
  variant: 'backgroundInverted',
};
BackgroundInvertedBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const Square = Template.bind({});
Square.args = {
  children: '>',
  square: true,
  variant: 'backgroundInverted',
};

export const SquareDark = Template.bind({});
SquareDark.args = {
  children: '>',
  square: true,
  variant: 'backgroundInverted',
};
SquareDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareBlue = Template.bind({});
SquareBlue.args = {
  children: '>',
  square: true,
  variant: 'backgroundInverted',
};
SquareBlue.decorators = [ThemeDecorator(Theme.BLUE)];

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

export const DisabledDark = Template.bind({});
DisabledDark.args = {
  children: 'Text',
  variant: 'outlined',
  disabled: true,
};
DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const DisabledBlue = Template.bind({});
DisabledBlue.args = {
  children: 'Text',
  variant: 'outlined',
  disabled: true,
};
DisabledBlue.decorators = [ThemeDecorator(Theme.BLUE)];
