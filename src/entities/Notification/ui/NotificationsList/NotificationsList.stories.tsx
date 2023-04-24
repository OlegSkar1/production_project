import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationsList } from './NotificationsList';

export default {
  title: 'shared/NotificationsList',
  component: NotificationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationsList>;

const Template: ComponentStory<typeof NotificationsList> = (args) => <NotificationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
