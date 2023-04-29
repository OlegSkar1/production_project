import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleRateCard } from './ArticleRateCard';

export default {
  title: 'shared/ArticleRateCard',
  component: ArticleRateCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleRateCard>;

const Template: ComponentStory<typeof ArticleRateCard> = (args) => <ArticleRateCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
