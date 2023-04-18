import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RecommendArticles } from './RecommendArticles';

export default {
  title: 'features/RecommendArticles',
  component: RecommendArticles,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    recommendArticles: {
      isLoading: false,
      error: undefined,
      limit: 3,
      articles: [
        {
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
        },
        {
          id: '2',
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
                'Программа, которую по традиции называют «Hello, world!», очень проста. .',
                'JavaScript — это язык, программы на котором можно выполнять в разныхна настольном компьютере',
              ],
            },
          ],
        },
        {
          id: '3',
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
              paragraph: ['Программа, которую по традиции называют «Hello, world!», очень проста.  «Hecript'],
            },
          ],
        },
      ],
    },
  },
} as ComponentMeta<typeof RecommendArticles>;

const Template: ComponentStory<typeof RecommendArticles> = (args) => <RecommendArticles {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
