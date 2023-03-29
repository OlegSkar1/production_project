/* eslint-disable max-len */
import { fetchArticles } from './fetchArticles';

import { Article } from 'entities/Article';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

const data: Article[] = [
  {
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
          'В целом, веб-разработка - то место, на мой взгляд, которое весьма лояльно относится к новичкам и дает большое количество возможностей. Так что возрадуйтесь, дорогие молодые разработчики со всего мира, кто сейчас читает эту статью.',
          'Во многом, язык популярен благодаря развитию веба. Ведь он монополизировал браузер и является, за редкими исключениями, единственным языком способным <s>делать анимации и формочки валидировать</s> делать почти сколь угодно сложную логику на клиенте (в браузере).',
        ],
      },
      {
        id: '2',
        type: 'TEXT',
        title: 'Погнали (Hello world)',
        paragraph: [
          'Принято в мире IT начинать изучение чего либо с "hello world" приложения.',
          'Это довольно таки хорошая практика. Самое сложное, в изучении чего либо - начать, а начинать с чего то супер простого - не так сложно.',
          'Есть основной способ проверки кода. Вывести какое-либо сообщение в консоль.',
          'Для этого в JS есть функция console.log Она имеет следующий синтаксис:',
        ],
      },
    ],
  },
  {
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
          'В целом, веб-разработка - то место, на мой взгляд, которое весьма лояльно относится к новичкам и дает большое количество возможностей. Так что возрадуйтесь, дорогие молодые разработчики со всего мира, кто сейчас читает эту статью.',
          'Во многом, язык популярен благодаря развитию веба. Ведь он монополизировал браузер и является, за редкими исключениями, единственным языком способным <s>делать анимации и формочки валидировать</s> делать почти сколь угодно сложную логику на клиенте (в браузере).',
        ],
      },
      {
        id: '2',
        type: 'TEXT',
        title: 'Погнали (Hello world)',
        paragraph: [
          'Принято в мире IT начинать изучение чего либо с "hello world" приложения.',
          'Это довольно таки хорошая практика. Самое сложное, в изучении чего либо - начать, а начинать с чего то супер простого - не так сложно.',
          'Есть основной способ проверки кода. Вывести какое-либо сообщение в консоль.',
          'Для этого в JS есть функция console.log Она имеет следующий синтаксис:',
        ],
      },
    ],
  },
];

describe('fetchArticles', () => {
  it('success fetch article', async () => {
    const thunk = new TestAsyncThunk(fetchArticles, {
      articlesList: {
        entities: {},
        ids: [],
        limit: 5,
        page: 1,
      },
    });
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk({ replace: false });

    expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });
  it('error fetch', async () => {
    const thunk = new TestAsyncThunk(fetchArticles, {
      articlesList: {
        entities: {},
        ids: [],
        limit: 5,
        page: 1,
      },
    });
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({ replace: false });

    expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
