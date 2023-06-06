import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { avatar } from '@/shared/const/imagePaths';

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Admin = Template.bind({});
Admin.args = {};
Admin.decorators = [StoreDecorator({ user: { authData: { id: '1', username: 'user', avatar, roles: ['admin'] } } })];

export const User = Template.bind({});
User.args = {};
User.decorators = [StoreDecorator({ user: { authData: { id: '1', username: 'user', avatar } } })];
