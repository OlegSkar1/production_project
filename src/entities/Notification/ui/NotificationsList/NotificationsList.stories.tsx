import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { NotificationsList } from './NotificationsList';

import { NotificationType } from '../../model/types/notification';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const notification: NotificationType = {
  id: '1',
  description: 'This is the notification',
  title: 'This is the notification title',
  userId: '1',
};

export default {
  title: 'entities/Notification/NotificationsList',
  component: NotificationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock, StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [
          { ...notification, id: '1' },
          { ...notification, id: '2', href: '/' },
          { ...notification, id: '3' },
          { ...notification, id: '4' },
          { ...notification, id: '5' },
        ],
      },
    ],
  },
} as ComponentMeta<typeof NotificationsList>;

const Template: ComponentStory<typeof NotificationsList> = (args) => <NotificationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
