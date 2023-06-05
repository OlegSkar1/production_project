import { Story } from '@storybook/react';

import { setFeatureFlags } from '@/shared/lib/featureFlags';
import { FeatureFlags } from '@/shared/types/features';

export const FeatureFlagsDecorator = (features: FeatureFlags) => (StoryComponent: Story) => {
  setFeatureFlags(features);
  return <StoryComponent />;
};
