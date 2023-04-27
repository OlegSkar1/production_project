import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Code } from './Code';

import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Light = Template.bind({});
Light.args = {
  text:
    'export default {\n' +
    "  title: 'shared/Code',\n" +
    '  component: Code,\n' +
    '  argTypes: {\n' +
    "    backgroundColor: { control: 'color' },\n" +
    '  },\n' +
    '} as ComponentMeta<typeof Code>;\n' +
    '\n' +
    'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;',
};

export const Dark = Template.bind({});
Dark.args = {
  text:
    'export default {\n' +
    "  title: 'shared/Code',\n" +
    '  component: Code,\n' +
    '  argTypes: {\n' +
    "    backgroundColor: { control: 'color' },\n" +
    '  },\n' +
    '} as ComponentMeta<typeof Code>;\n' +
    '\n' +
    'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {
  text:
    'export default {\n' +
    "  title: 'shared/Code',\n" +
    '  component: Code,\n' +
    '  argTypes: {\n' +
    "    backgroundColor: { control: 'color' },\n" +
    '  },\n' +
    '} as ComponentMeta<typeof Code>;\n' +
    '\n' +
    'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;',
};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];
