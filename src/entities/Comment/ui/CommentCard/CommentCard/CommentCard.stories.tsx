import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentCard } from './CommentCard';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/types';

export default {
  title: 'shared/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = { comment: { id: '1', text: 'Comment', user: { id: '1', username: 'user' } } };

export const Dark = Template.bind({});
Dark.args = { comment: { id: '1', text: 'Comment', user: { id: '1', username: 'user' } } };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
