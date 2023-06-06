import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleRateCard } from './ArticleRateCard';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'features/ArticleRateCard',
  component: ArticleRateCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({ user: { authData: { id: '1' } } })],
} as ComponentMeta<typeof ArticleRateCard>;

const Template: ComponentStory<typeof ArticleRateCard> = (args) => <ArticleRateCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  articleId: '1',
};
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      delay: 2000,
      status: 200,
      response: [{ userId: '1', articleId: '1', rate: 4 }],
    },
  ],
};
export const NotSelected = Template.bind({});
NotSelected.args = {
  articleId: '1',
};
NotSelected.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};
