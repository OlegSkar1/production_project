import { ComponentMeta, ComponentStory } from '@storybook/react';

import withMock from 'storybook-addon-mock';

import { NotificationButton } from './NotificationButton';

import { NotificationType } from '@/entities/Notification';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const notification: NotificationType = {
  id: '1',
  description: 'This is the notification',
  title: 'This is the notification title',
  userId: '1',
};

export default {
  title: 'features/NotificationButton',
  component: NotificationButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
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
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
