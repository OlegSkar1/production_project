import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UiSwitcher } from './UiSwitcher';

export default {
  title: 'shared/UiSwitcher',
  component: UiSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UiSwitcher>;

const Template: ComponentStory<typeof UiSwitcher> = (args) => <UiSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
