import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileRateCard } from './ProfileRateCard';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'features/ProfileRateCard',
  component: ProfileRateCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileRateCard>;

const Template: ComponentStory<typeof ProfileRateCard> = (args) => <ProfileRateCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  profileId: '2',
};
Normal.decorators = [StoreDecorator({ user: { authData: { id: '1' } } })];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=1&profileId=2`,
      method: 'GET',
      status: 200,
      response: [
        {
          profileId: '2',
          userId: '1',
          rate: 4,
        },
      ],
    },
  ],
};
