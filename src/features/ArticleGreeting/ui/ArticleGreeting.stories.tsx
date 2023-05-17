import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleGreeting } from './ArticleGreeting';

export default {
  title: 'features/ArticleGreeting',
  component: ArticleGreeting,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleGreeting>;

const Template: ComponentStory<typeof ArticleGreeting> = (args) => <ArticleGreeting {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
