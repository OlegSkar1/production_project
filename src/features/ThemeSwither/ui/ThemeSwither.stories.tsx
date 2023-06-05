import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeSwither } from './ThemeSwither';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'features/ThemeSwither',
  component: ThemeSwither,
  argTypes: {},
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ThemeSwither>;

const Template: ComponentStory<typeof ThemeSwither> = (args) => <ThemeSwither {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue = Template.bind({});
Blue.args = {};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];

export const NewDesign = Template.bind({});
NewDesign.args = {};
NewDesign.decorators = [NewDesignDecorator];
