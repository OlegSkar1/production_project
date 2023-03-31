import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesPageTabs } from './ArticlesPageTabs';

export default {
  title: 'features/ArticlesPageFilter/Tabs',
  component: ArticlesPageTabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPageTabs>;

const Template: ComponentStory<typeof ArticlesPageTabs> = (args) => <ArticlesPageTabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
