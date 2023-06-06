## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev или npm run start:dev:vite - запуск сервера + frontend проекта в dev режиме
```

---

Ознакомиться можно по [ссылке](https://prod-project.netlify.app/) (при первом запуске возможна длительная задержка, около 30сек, из-за бесплатного сервиса для json-server)

```typescript
//Данные для входа:

    admin: {
      login: admin,
      password: 123
    },

    user: {
      login: user,
      password: 123
    },

    manager: {
      login: manager,
      password: 123
    }
```

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:vite` - Запуск frontend проекта на vite
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:vite` - Запуск frontend проекта на vite + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда
- `npm run prepare` - прекоммит хуки
- `npm run generate:slice` - Скрипт для генерации FSD слайсов
- `npm run remove-feature` - Скрипт для удаления устаревшего дизайна

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

В проекте реализовано переключение старого/нового дизайна, а также синхронизация текущего дизайна пользователя с базой.

---

## Работа с изменением темы пользователей

Тема применяется по наличию фича флага юзера с бд.
Контент отрисовывается динамически с помощью функции `ToggleFeature`, которая смотрит на состояние флага в базе `isAppRedesigned`, если он в положении `true`, то пользователю отдается обновленный дизайн.

```ts
interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: Role[];
  features?: FeatureFlags;
  jsonSettings?: JsonSettings;
}

interface FeatureFlags {
  isArticleRatingEnabled?: boolean;
  isCounterEnabled?: boolean;
  isAppRedesigned?: boolean; //фича флаг обновленного дизайна
}
```

В последствии, если будет необходимость отказаться от старого дизайна, достаточно будет запустить скрипт `remove-feature isAppRedesign on`, который пройдет по всему проекту и удалит ненужный код

```jsx
<ToggleFeature
      name='isAppRedesigned'
      off={<TextDeprecated title={t('userSettings')} />}
      on={<TextRedesigned title={t('userSettings')} />}
    />

  // скрипт `remove-feature isAppRedesign on` удалит все лишнее, останется только часть кода из props.on
  <TextRedesigned title={t('userSettings')} />

```

Функция `toggleFeature` работает также, но не с `jsx`, например:

```js
toggleFeature({
  name: 'isAppRedesigned',
  off: () => cls.drawerOld, //css class
  on: () => cls.drawerNew,
});
```

---

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами и плюральными формами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode([i18n Ally](<[https://](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)>))

[Документация i18next](https://react.i18next.com/)

---

## Тесты

В проекте используются 4 вида тестов:

1. Обычные unit тесты на jest - `npm run test:unit`
2. Тесты на компоненты с React testing library -`npm run test:unit`
3. Скриншотное тестирование с loki `npm run test:ui`
4. e2e тестирование с Cypress `npm run test:e2e`

Подробнее о тестах - [документация тестирование](/docs/tests.md)

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin _eslint-plugin-olegskar-fsd-checker_,
который содержит 3 правила

1. path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2. layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entitites)
3. public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров

- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.  
Запросы на сервер мокаются с помощью `storybook-addon-mock`.  
Роутинг мокается с помощью `storybook-addon-react-router-v6`

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

- `npm run sb`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};
```

---

## Конфигурация проекта

Для разработки проект содержит 2 конфига:

1. Webpack - `./config/build`
2. Vite - `vite.config.ts`

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в `/config`

- `/config/babel` - babel
- `/config/build` - конфигурация webpack
- `/config/jest` - конфигурация тестовой среды
- `/config/storybook` - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

---

## CI pipeline и pre commit хуки

Конфигурация github actions находится в `/.github/workflows`.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в `/.husky`

---

## Deployment

Конфигурация nginx находится в папке `.deploy/nginx.conf`  
Для упрощения обновления на сервере используется bash скрипт `.deploy/deploy.sh`

---

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью `EntityAdapter`

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---

## Работа с feature-flags

Разрешено использование feature flags только с помощью хелпера toggleFeatures

в него передается объект с опциями

> {  
>  `name`: название фича-флага,  
>  `on`: функция, которая отработает после Включения фичи  
>  `off`: функция, которая отработает после ВЫключения фичи  
> }

Для автоматического удаления фичи использовать скрипт remove-feature.ts,
который принимает 2 аргумента

1. Название удаляемого фича-флага
2. Состояние (on\off)

   > Например `ts-node scripts/remove_feature.ts isCounterEnabled off`

---

## Сущности (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Фичи (features)

- [AddNewCommentForm](/src/features/AddNewCommentForm)
- [articlePageFilter](/src/features/articlePageFilter)
- [ArticleRateCard](/src/features/ArticleRateCard)
- [ArticleViewChanger](/src/features/ArticleViewChanger)
- [AuthByUsername](/src/features/AuthByUsername)
- [AvatarDropdown](/src/features/AvatarDropdown)
- [EditableProfileCard](/src/features/EditableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [NotificationButton](/src/features/NotificationButton)
- [PageLoader](/src/features/PageLoader)
- [ProfileRateCard](/src/features/ProfileRateCard)
- [RecommendArticles](/src/features/RecommendArticles)
- [ScrollSave](/src/features/ScrollSave)
- [ThemeSwitcher](/src/features/ThemeSwither)

## Виджеты (widgets)

- [Navbar](/src/widgets/Navbar)
- [Page](/src/widgets/Page)
- [PageError](/src/widgets/PageError)
- [Sidebar](/src/widgets/Sidebar)
