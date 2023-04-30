import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileRateCard } from './ProfileRateCard';

export default {
  title: 'shared/ProfileRateCard',
  component: ProfileRateCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileRateCard>;

const Template: ComponentStory<typeof ProfileRateCard> = (args) => <ProfileRateCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
