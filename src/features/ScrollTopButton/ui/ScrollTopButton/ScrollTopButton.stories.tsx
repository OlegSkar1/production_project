import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ScrollTopButton } from './ScrollTopButton';

export default {
  title: 'features/ScrollTopButton',
  component: ScrollTopButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ScrollTopButton>;

const Template: ComponentStory<typeof ScrollTopButton> = (args) => <ScrollTopButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
