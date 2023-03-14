import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleImageBlock } from './ArticleImageBlock';

export default {
  title: 'entities/ArticleImageBlock',
  component: ArticleImageBlock,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleImageBlock>;

const Template: ComponentStory<typeof ArticleImageBlock> = (args) => <ArticleImageBlock {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
