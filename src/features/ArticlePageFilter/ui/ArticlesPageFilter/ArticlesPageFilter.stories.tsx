import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesPageFilter } from './ArticlesPageFilter';

export default {
  title: 'shared/ArticlesPageFilter',
  component: ArticlesPageFilter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPageFilter>;

const Template: ComponentStory<typeof ArticlesPageFilter> = (args) => <ArticlesPageFilter {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
