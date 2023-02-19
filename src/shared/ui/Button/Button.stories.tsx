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

export const OutlinedSizeM = Template.bind({});
OutlinedSizeM.args = {
  children: 'Text',
  variant: 'outlined',
  size: 'M',
};

export const OutlinedSizeL = Template.bind({});
OutlinedSizeL.args = {
  children: 'Text',
  variant: 'outlined',
  size: 'L',
};

export const OutlinedSizeXL = Template.bind({});
OutlinedSizeXL.args = {
  children: 'Text',
  variant: 'outlined',
  size: 'XL',
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'Text',
  variant: 'outlined',
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

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
export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  square: true,
  size: 'L',
  variant: 'backgroundInverted',
};
export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  size: 'XL',
  square: true,
  variant: 'backgroundInverted',
};
