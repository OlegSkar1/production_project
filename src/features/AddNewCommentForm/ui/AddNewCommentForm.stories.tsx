import { ComponentStory, ComponentMeta } from '@storybook/react';

import AddNewCommentForm from './AddNewCommentForm';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'features/AddNewCommentForm',
  component: AddNewCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddNewCommentForm>;

const Template: ComponentStory<typeof AddNewCommentForm> = (args) => <AddNewCommentForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({ addCommentForm: { text: 'Add New Comment' } })];

export const Error = Template.bind({});
Error.args = {
  error: 'error',
};
Error.decorators = [StoreDecorator({ addCommentForm: {} })];
