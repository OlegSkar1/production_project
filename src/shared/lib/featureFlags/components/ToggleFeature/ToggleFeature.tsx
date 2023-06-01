import { ReactElement } from 'react';

import { getFeatureFlags } from '../../lib/getSetFeatureFlags';

import { FeatureFlags } from '@/shared/types/features';

interface ToggleFeatureOptions {
  name: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export function ToggleFeature({ name, on, off }: ToggleFeatureOptions): ReactElement | null {
  if (getFeatureFlags(name)) {
    return on;
  } else {
    return off;
  }
}
