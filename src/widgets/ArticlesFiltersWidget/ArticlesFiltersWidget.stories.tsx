import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesFiltersWidget } from './ArticlesFiltersWidget';

export default {
  title: 'shared/ArticlesFiltersWidget',
  component: ArticlesFiltersWidget,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesFiltersWidget>;

const Template: ComponentStory<typeof ArticlesFiltersWidget> = (args) => <ArticlesFiltersWidget {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
