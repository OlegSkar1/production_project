import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesPageSort } from './ArticlesPageSort';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'features/ArticlesPageFilter/Sort',
  component: ArticlesPageSort,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    StoreDecorator({
      articlesFilter: {
        order: 'asc',
        sort: 'createdAt',
      },
    }),
  ],
} as ComponentMeta<typeof ArticlesPageSort>;

const Template: ComponentStory<typeof ArticlesPageSort> = (args) => <ArticlesPageSort {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];
