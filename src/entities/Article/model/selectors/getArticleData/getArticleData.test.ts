/* eslint-disable max-len */
import { getArticleData } from './getArticleData';

import { Article } from '../../types/article';

import { StateSchema } from 'app/providers/StoreProvider';

describe('getArticleData', () => {
  it('should return article data', () => {
    const data: Article = {
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
        {
          id: '3',
          type: 'CODE',
          code: "console.log('Hello World!');",
        },
        {
          id: '4',
          type: 'IMAGE',
          src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/1bf/1f6/3e6/1bf1f63e680625c26877bb2d20f9f651.png',
          title: 'Должно получиться что-то подобное',
        },
        {
          id: '5',
          type: 'TEXT',
          title: 'От элементарного к простому',
          paragraph: [
            'Далее я хочу с Вами разобрать базовый синтаксис языка и основные его функции, с которыми можно поиграться и получить что-то, около того, что вы могли видеть на уроках информатики.',
          ],
        },
        {
          id: '6',
          type: 'TEXT',
          title: '1) Переменные',
          paragraph: [
            'В JS работа с данными происходит, в основном, путем манипуляций с "переменными". Это такие штуки, которые содержат в себе какую либо информацию. Например, мы знаем, что имя Пети - Петя и эту информацию мы можем положить в переменную для дальнейшей работы с ней:',
          ],
        },
        {
          id: '7',
          type: 'CODE',
          code: "const name = 'Петя';",
        },
        {
          id: '8',
          type: 'IMAGE',
          src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/eab/c11/475/eabc11475e6ba86042403a8d9bd29b87.jpg',
          title: 'Тестирование задач',
        },
      ],
    };

    const state: DeepPartial<StateSchema> = {
      article: {
        data,
      },
    };
    expect(getArticleData(state as StateSchema)).toEqual(data);
  });
  it('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {
      article: {},
    };
    expect(getArticleData(state as StateSchema)).toBe(undefined);
  });
});
