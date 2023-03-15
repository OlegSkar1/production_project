import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './Text';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Title Lorem ipsum',
  text:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nulla quam vel rerum vero incidunt accusamus veritatis commodi provident sapiente?',
};

export const SizeL = Template.bind({});
SizeL.args = {
  size: 'size_l',
  title: 'Title Lorem ipsum',
  text:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nulla quam vel rerum vero incidunt accusamus veritatis commodi provident sapiente?',
};

export const DefaultCenter = Template.bind({});
DefaultCenter.args = {
  align: 'center',
  title: 'Title Lorem ipsum',
  text:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nulla quam vel rerum vero incidunt accusamus veritatis commodi provident sapiente?',
};

export const DefaultRight = Template.bind({});
DefaultRight.args = {
  align: 'right',
  title: 'Title Lorem ipsum',
  text:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nulla quam vel rerum vero incidunt accusamus veritatis commodi provident sapiente?',
};

export const DefaultRed = Template.bind({});
DefaultRed.args = {
  theme: 'error',
  title: 'Title Lorem ipsum',
  text:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nulla quam vel rerum vero incidunt accusamus veritatis commodi provident sapiente?',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor',
};
export const onlyText = Template.bind({});
onlyText.args = {
  text:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nulla quam vel rerum vero incidunt accusamus veritatis commodi provident sapiente?',
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  title: 'Title Lorem ipsum',
  text:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nulla quam vel rerum vero incidunt accusamus veritatis commodi provident sapiente?',
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nulla quam vel rerum vero incidunt accusamus veritatis commodi provident sapiente?',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const DefaultBlue = Template.bind({});
DefaultBlue.args = {
  title: 'Title Lorem ipsum',
  text:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nulla quam vel rerum vero incidunt accusamus veritatis commodi provident sapiente?',
};
DefaultBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const onlyTitleBlue = Template.bind({});
onlyTitleBlue.args = {
  title:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor',
};
onlyTitleBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const onlyTextBlue = Template.bind({});
onlyTextBlue.args = {
  text:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nulla quam vel rerum vero incidunt accusamus veritatis commodi provident sapiente?',
};
onlyTextBlue.decorators = [ThemeDecorator(Theme.BLUE)];
