import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesFiltersWidget } from './ArticlesFiltersWidget';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'shared/ArticlesFiltersWidget',
  component: ArticlesFiltersWidget,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({}), NewDesignDecorator],
} as ComponentMeta<typeof ArticlesFiltersWidget>;

const Template: ComponentStory<typeof ArticlesFiltersWidget> = (args) => <ArticlesFiltersWidget {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
