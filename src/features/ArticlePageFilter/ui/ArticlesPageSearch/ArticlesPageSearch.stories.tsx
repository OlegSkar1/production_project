import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesPageSearch } from './ArticlesPageSearch';

export default {
  title: 'shared/ArticlesPageSearch',
  component: ArticlesPageSearch,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPageSearch>;

const Template: ComponentStory<typeof ArticlesPageSearch> = (args) => <ArticlesPageSearch {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
