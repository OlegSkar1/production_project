import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesPageSearch } from './ArticlesPageSearch';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
  title: 'features/ArticlesPageFilter/Search',
  component: ArticlesPageSearch,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    StoreDecorator({
      articlesFilter: {
        search: 'search',
      },
    }),
  ],
} as ComponentMeta<typeof ArticlesPageSearch>;

const Template: ComponentStory<typeof ArticlesPageSearch> = (args) => <ArticlesPageSearch {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
