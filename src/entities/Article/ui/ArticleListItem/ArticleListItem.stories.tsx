import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Article } from '../../model/types/article';

import { ArticleListItem } from './ArticleListItem';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'entities/Article/ArticleListItem',
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleListItem>;
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

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const Grid = Template.bind({});
Grid.args = { view: 'GRID', article };

export const GridDark = Template.bind({});
GridDark.args = { view: 'GRID', article };
GridDark.decorators = [ThemeDecorator(Theme.DARK)];

export const GridBlue = Template.bind({});
GridBlue.args = { view: 'GRID', article };
GridBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const List = Template.bind({});
List.args = { view: 'LIST', article };

export const ListDark = Template.bind({});
ListDark.args = { view: 'LIST', article };
ListDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ListBlue = Template.bind({});
ListBlue.args = { view: 'LIST', article };
ListBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const RedesignedGrid = Template.bind({});
RedesignedGrid.args = { view: 'GRID', article };
RedesignedGrid.decorators = [NewDesignDecorator];

export const RedesignedGridDark = Template.bind({});
RedesignedGridDark.args = { view: 'GRID', article };
RedesignedGridDark.decorators = [ThemeDecorator(Theme.DARK), NewDesignDecorator];

export const RedesignedGridOrange = Template.bind({});
RedesignedGridOrange.args = { view: 'GRID', article };
RedesignedGridOrange.decorators = [ThemeDecorator(Theme.ORANGE), NewDesignDecorator];

export const RedesignedList = Template.bind({});
RedesignedList.args = { view: 'LIST', article };
RedesignedList.decorators = [NewDesignDecorator];

export const RedesignedListDark = Template.bind({});
RedesignedListDark.args = { view: 'LIST', article };
RedesignedListDark.decorators = [ThemeDecorator(Theme.DARK), NewDesignDecorator];

export const RedesignedListOrange = Template.bind({});
RedesignedListOrange.args = { view: 'LIST', article };
RedesignedListOrange.decorators = [ThemeDecorator(Theme.ORANGE), NewDesignDecorator];
