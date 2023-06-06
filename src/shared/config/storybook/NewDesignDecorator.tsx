import { Story } from '@storybook/react';

import { setFeatureFlags } from '@/shared/lib/featureFlags';
import { getAllFeatureFlags } from '@/shared/lib/featureFlags/lib/getSetFeatureFlags';

export const NewDesignDecorator = (Story: Story) => {
  setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });

  return <Story />;
};
