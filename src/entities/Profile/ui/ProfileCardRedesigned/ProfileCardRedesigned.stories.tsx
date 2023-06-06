import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileCardRedesigned } from './ProfileCardRedesigned';

import { Country } from '@/entities/Country/testing';
import { Currency } from '@/entities/Currency/testing';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';
import { avatar } from '@/shared/const/imagePaths';

export default {
  title: 'entities/ProfileCard/Redesigned',
  component: ProfileCardRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCardRedesigned>;

const data = {
  first: 'UserName',
  lastname: 'UserLastname',
  age: '20',
  avatar,
  city: 'Moscow',
  username: 'nickname',
  country: Country.Russia,
  currency: Currency.RUB,
};

const Template: ComponentStory<typeof ProfileCardRedesigned> = (args) => <ProfileCardRedesigned {...args} />;

export const Normal = Template.bind({});
Normal.args = { data };
Normal.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = { data };
Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = { data };
Orange.decorators = [NewDesignDecorator, ThemeDecorator(Theme.ORANGE)];
