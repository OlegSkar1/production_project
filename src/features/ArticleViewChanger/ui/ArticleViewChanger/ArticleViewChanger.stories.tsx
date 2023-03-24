import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleViewChanger } from './ArticleViewChanger';

export default {
  title: 'shared/ArticleViewChanger',
  component: ArticleViewChanger,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleViewChanger>;

const Template: ComponentStory<typeof ArticleViewChanger> = (args) => <ArticleViewChanger {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
