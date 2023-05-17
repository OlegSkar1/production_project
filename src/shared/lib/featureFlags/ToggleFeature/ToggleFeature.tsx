import { ReactElement } from 'react';

import { getFeatureFlags } from '../getSetFeatureFlags';

import { FeatureFlags } from '@/shared/types/features';

interface ToggleFeatureOptions {
  name: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export function ToggleFeature({ name, on, off }: ToggleFeatureOptions): ReactElement | null {
  if (getFeatureFlags(name) === undefined) {
    return null;
  } else if (getFeatureFlags(name)) {
    return on;
  } else {
    return off;
  }
}
