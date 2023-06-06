import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UiSwitcher } from './UiSwitcher';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'features/UiSwitcher',
  component: UiSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UiSwitcher>;

const Template: ComponentStory<typeof UiSwitcher> = (args) => <UiSwitcher {...args} />;

export const Old = Template.bind({});
Old.args = {};
Old.decorators = [StoreDecorator({})];

export const New = Template.bind({});
New.args = {};
New.decorators = [StoreDecorator({}), NewDesignDecorator];
