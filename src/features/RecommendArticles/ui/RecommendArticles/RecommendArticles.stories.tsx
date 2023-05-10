import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RecommendArticles } from './RecommendArticles';

import { Article } from '@/entities/Article/testing';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  user: {
    id: '1',
    username: 'admin',
  },
  type: ['IT'],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraph: [
        'Программа, которую по традиции называ',
        'JavaScript — это язык, программы на котором можно выполнять в разных ср.',
        'Существуют и другие способы запуска JS-кода в браузере. Так,',
      ],
    },
  ],
};

export default {
  title: 'features/RecommendArticles',
  component: RecommendArticles,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=4`,
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: '1' },
          { ...article, id: '2' },
          { ...article, id: '3' },
          { ...article, id: '4' },
        ],
      },
    ],
  },
} as ComponentMeta<typeof RecommendArticles>;

const Template: ComponentStory<typeof RecommendArticles> = (args) => <RecommendArticles {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
