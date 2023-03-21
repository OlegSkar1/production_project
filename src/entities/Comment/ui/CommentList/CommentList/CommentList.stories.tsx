import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
  title: 'shared/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    { id: '1', text: 'Comment1', user: { id: '1', username: 'user' } },
    { id: '2', text: 'Comment2', user: { id: '2', username: 'user' } },
  ],
};
