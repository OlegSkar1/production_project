import { articlesListActions, articlesListReducer } from './articlesListSlice';

import { fetchArticles } from '../../services/fetchArticles/fetchArticles';
import { ArticlesListSchema } from '../../types/articles';

import { Article, ArticleView } from 'entities/Article';

const article: Article = {
  id: '1',
  title: 'JavaScript для начинающих. Урок 1',
  subtitle: 'JavaScript',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  createdAt: '18.05.2022',
  views: 1092,
  type: ['IT'],
  user: {
    id: '1',
    username: 'admin',
  },
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Вступление',
      paragraph: [
        'JavaScript - язык программирования!',
        'По некоторым исследованиям, кстати, самый популярный. И уж точно один из самых простых для входа в IT.',
        'В целом, веб-разработка - то место, на мой взгляд.',
      ],
    },
    {
      id: '2',
      type: 'TEXT',
      title: 'Погнали (Hello world)',
      paragraph: [
        'Принято в мире IT начинать изучение чего либо с "hello world" приложения.',
        'Это довольно таки хорошая практика. Самое сложное, в изучении чего либо - начать.',
        'Есть основной способ проверки кода. Вывести какое-либо сообщение в консоль.',
        'Для этого в JS есть функция console.log Она имеет следующий синтаксис:',
      ],
    },
  ],
};

const state: ArticlesListSchema = {
  entities: {
    '1': article,
  },
  ids: ['1'],
  hasMore: true,
  page: 1,
  view: ArticleView.GRID,
  limit: 5,
  isLoading: false,
  _inited: false,
};

beforeEach(() => {
  localStorage.clear();
});

describe('articleListSlice', () => {
  it('should be set view', () => {
    expect(articlesListReducer(state, articlesListActions.setView(ArticleView.LIST))).toEqual({
      ...state,
      view: ArticleView.LIST,
    });
  });
  it('should be set page ', () => {
    expect(articlesListReducer(state, articlesListActions.setPage(2))).toEqual({
      ...state,
      page: 2,
    });
  });
  it('should be get initView ', () => {
    articlesListReducer(state, articlesListActions.setView(ArticleView.LIST));
    expect(articlesListReducer(state, articlesListActions.getInitView())).toEqual({
      ...state,
      view: ArticleView.LIST,
      limit: 4,
      _inited: true,
    });
  });
  it('should not to be get initView ', () => {
    expect(articlesListReducer(state, articlesListActions.getInitView())).toEqual({
      ...state,
      view: ArticleView.GRID,
      limit: 5,
      _inited: true,
    });
  });
  it('fetchArticles fulfilled', () => {
    expect(articlesListReducer(state, fetchArticles.fulfilled([article], '', { replace: false }))).toEqual({
      ...state,
      hasMore: false,
    });
  });
});
