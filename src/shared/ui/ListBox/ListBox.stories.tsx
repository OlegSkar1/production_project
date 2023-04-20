import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 150 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top left',
  items: [
    {
      content: 'dfsdgsdsg',
      value: '123',
    },
    {
      content: 'dfsdgfhdfhsdsg',
      value: '12hs3',
    },
    {
      content: 'dfsdg343252sdsg',
      value: '123423',
    },
  ],
  value: '123',
};

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top right',
  items: [
    {
      content: 'dfsdgsdsg',
      value: '123',
    },
    {
      content: 'dfsdgfhdfhsdsg',
      value: '12hs3',
    },
    {
      content: 'dfsdg343252sdsg',
      value: '123423',
    },
  ],
  value: '123',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottom left',
  items: [
    {
      content: 'dfsdgsdsg',
      value: '123',
    },
    {
      content: 'dfsdgfhdfhsdsg',
      value: '12hs3',
    },
    {
      content: 'dfsdg343252sdsg',
      value: '123423',
    },
  ],
  value: '123',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottom right',
  items: [
    {
      content: 'dfsdgsdsg',
      value: '123',
    },
    {
      content: 'dfsdgfhdfhsdsg',
      value: '12hs3',
    },
    {
      content: 'dfsdg343252sdsg',
      value: '123423',
    },
  ],
  value: '123',
};
