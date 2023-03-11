import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {},
  args: {
    isOpen: true,
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nulla quam vel rerum vero incidunt accusamus veritatis commodi provident sapiente?',
};

export const Dark = Template.bind({});
Dark.args = {
  children:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nulla quam vel rerum vero incidunt accusamus veritatis commodi provident sapiente?',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {
  children:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nulla quam vel rerum vero incidunt accusamus veritatis commodi provident sapiente?',
};

Blue.decorators = [ThemeDecorator(Theme.BLUE)];
