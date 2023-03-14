import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleCodeBlock } from './ArticleCodeBlock';

export default {
  title: 'entities/ArticleCodeBlock',
  component: ArticleCodeBlock,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleCodeBlock>;

const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => <ArticleCodeBlock {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
