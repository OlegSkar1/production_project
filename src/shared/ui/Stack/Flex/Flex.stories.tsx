/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from './Flex';

export default {
  title: 'shared/Stack/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    ),
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const JustifyStart = Template.bind({});
JustifyStart.args = {};

export const JustifyCenter = Template.bind({});
JustifyCenter.args = {
  justify: 'center',
};

export const JustifyEnd = Template.bind({});
JustifyEnd.args = {
  justify: 'end',
};

export const JustifyBeetwen = Template.bind({});
JustifyBeetwen.args = {
  justify: 'beetwen',
};

export const DirectionColumn = Template.bind({});
DirectionColumn.args = {
  direction: 'column',
};

export const DirectionColumnAlignStart = Template.bind({});
DirectionColumnAlignStart.args = {
  direction: 'column',
  align: 'start',
};

export const Gap4 = Template.bind({});
Gap4.args = {
  gap: '4',
};

export const Gap8 = Template.bind({});
Gap8.args = {
  gap: '8',
};

export const Gap16 = Template.bind({});
Gap16.args = {
  gap: '16',
};

export const Gap32 = Template.bind({});
Gap32.args = {
  gap: '32',
};
