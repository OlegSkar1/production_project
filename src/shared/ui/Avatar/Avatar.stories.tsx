import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './Avatar';

import { avatar } from 'shared/const/imagePaths';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  src: avatar,
  alt: 'avatar',
};

export const Small = Template.bind({});
Small.args = {
  src: avatar,
  alt: 'avatar',
  size: 'small',
};
