import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleGreeting } from './ArticleGreeting';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'features/ArticleGreeting',
  component: ArticleGreeting,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleGreeting>;

const Template: ComponentStory<typeof ArticleGreeting> = (args) => <ArticleGreeting {...args} />;

export const Old = Template.bind({});
Old.args = {};

export const New = Template.bind({});
New.args = {};
New.decorators = [NewDesignDecorator];
