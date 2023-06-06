import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RatingCard } from './RatingCard';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

export default {
  title: 'shared/RatingCard',
  component: RatingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Поставьте оценку',
};

export const Selected = Template.bind({});
Selected.args = {
  rate: 4,
};

export const NormalDark = Template.bind({});
NormalDark.args = {
  title: 'Поставьте оценку',
};
NormalDark.decorators = [ThemeDecorator('app_theme_dark')];

export const SelectedDark = Template.bind({});
SelectedDark.args = {
  rate: 4,
};
SelectedDark.decorators = [ThemeDecorator('app_theme_dark')];

export const NormalBlue = Template.bind({});
NormalBlue.args = {
  title: 'Поставьте оценку',
};
NormalBlue.decorators = [ThemeDecorator('app_theme_blue')];

export const SelectedBlue = Template.bind({});
SelectedBlue.args = {
  rate: 4,
};
SelectedBlue.decorators = [ThemeDecorator('app_theme_blue')];
