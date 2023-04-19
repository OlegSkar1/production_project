import { ComponentStory, ComponentMeta } from '@storybook/react';

import AdminPage from './AdminPage';

export default {
  title: 'pages/AdminPage',
  component: AdminPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AdminPage>;

const Template: ComponentStory<typeof AdminPage> = (args: any) => <AdminPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
