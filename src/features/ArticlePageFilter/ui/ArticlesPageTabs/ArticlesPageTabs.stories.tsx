import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesPageTabs } from './ArticlesPageTabs';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
  title: 'features/ArticlesPageFilter/Tabs',
  component: ArticlesPageTabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    StoreDecorator({
      articlesFilter: {
        tab: 'ALL',
      },
    }),
  ],
} as ComponentMeta<typeof ArticlesPageTabs>;

const Template: ComponentStory<typeof ArticlesPageTabs> = (args) => <ArticlesPageTabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
