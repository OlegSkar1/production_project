import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from '../../../redesigned/Avatar/Avatar';

import { Dropdown } from './Dropdown';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 200 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  items: [
    {
      content: 'test123',
    },
    {
      content: 'test457',
    },
  ],
  trigger: (
    <Avatar size='normal' src='https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg' alt='user' />
  ),
};
