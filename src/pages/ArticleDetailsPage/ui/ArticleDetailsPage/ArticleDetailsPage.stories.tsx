/* eslint-disable max-len */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleCommentSchema } from '../../model/types/articleCommentSchema';

import ArticleDetailsPage from './ArticleDetailsPage';

import { Article } from '@/entities/Article/testing';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

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
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
    {
      id: '4',
      type: 'CODE',
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '5',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraph: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
  ],
};

const comments: ArticleCommentSchema = {
  ids: ['1', '2', '3'],
  entities: {
    '1': {
      id: '1',
      text: 'Comment 1',
      user: {
        id: '1',
        username: 'User 1',
      },
    },
    '2': {
      id: '2',
      text: 'Comment 2',
      user: {
        id: '2',
        username: 'User 2',
      },
    },
    '3': {
      id: '3',
      text: 'Comment 3',
      user: {
        id: '3',
        username: 'User 3',
      },
    },
  },
};

export default {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    StoreDecorator({
      article: {
        data: article,
      },
      articleComments: comments,
    }),
  ],
  parameters: {
    reactRouter: {
      routePath: '/articles/:id/edit',
      routeParams: { id: '1' },
    },
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
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        delay: '2000',
        status: 200,
        response: [{ userId: '1', articleId: '1', rate: 4 }],
      },
    ],
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const NormalCanEdit = Template.bind({});
NormalCanEdit.args = {};
NormalCanEdit.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: '1',
      },
    },
    article: {
      data: article,
    },
  }),
];

export const ErrorArticle = Template.bind({});
ErrorArticle.args = {};
ErrorArticle.decorators = [StoreDecorator({ article: { error: 'error' } })];

export const WithoutComments = Template.bind({});
WithoutComments.args = {};
WithoutComments.decorators = [StoreDecorator({ article: { data: article }, addCommentForm: {} })];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator({
    article: { isLoading: true },
    articleComments: { ...comments, isLoading: true },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];
