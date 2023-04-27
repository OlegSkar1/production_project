import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skeleton } from './Skeleton';

import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const SkeletonText = Template.bind({});
SkeletonText.args = {
  variant: 'text',
};

export const SkeletonTextDark = Template.bind({});
SkeletonTextDark.args = {
  variant: 'text',
};
SkeletonTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SkeletonTextBlue = Template.bind({});
SkeletonTextBlue.args = {
  variant: 'text',
};
SkeletonTextBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const SkeletonTitle = Template.bind({});
SkeletonTitle.args = {
  variant: 'title',
};

export const SkeletonTitleDark = Template.bind({});
SkeletonTitleDark.args = {
  variant: 'title',
};
SkeletonTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SkeletonTitleBlue = Template.bind({});
SkeletonTitleBlue.args = {
  variant: 'title',
};
SkeletonTitleBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const SkeletonCircle = Template.bind({});
SkeletonCircle.args = {
  variant: 'circle',
};
export const SkeletonCircleDark = Template.bind({});
SkeletonCircleDark.args = { variant: 'circle' };
SkeletonCircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SkeletonCircleBlue = Template.bind({});
SkeletonCircleBlue.args = { variant: 'circle' };
SkeletonCircleBlue.decorators = [ThemeDecorator(Theme.BLUE)];
