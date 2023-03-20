import { ComponentStory, ComponentMeta } from '@storybook/react';

import AddNewCommentForm from './AddNewCommentForm';

export default {
  title: 'entities/AddNewCommentForm',
  component: AddNewCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddNewCommentForm>;

const Template: ComponentStory<typeof AddNewCommentForm> = (args) => <AddNewCommentForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
