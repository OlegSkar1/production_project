import { getFeatureFlags } from './getSetFeatureFlags';

import { FeatureFlags } from '@/shared/types/features';

interface ToggleFeatureOptions<T> {
  name: keyof FeatureFlags;
  on: () => T;
  off: () => T;
}

export function toggleFeature<T>({ name, on, off }: ToggleFeatureOptions<T>): T {
  if (getFeatureFlags(name)) {
    return on();
  } else {
    return off();
  }
}
