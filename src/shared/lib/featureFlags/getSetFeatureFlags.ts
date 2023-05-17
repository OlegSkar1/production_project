import { FeatureFlags } from '@/shared/types/features';

let featureFlag: FeatureFlags;

export const setFeatureFlags = (newFeatureFlags?: FeatureFlags) => {
  if (newFeatureFlags) {
    featureFlag = newFeatureFlags;
  }
};

export const getFeatureFlags = (flag: keyof FeatureFlags) => {
  if (!featureFlag) return false;
  return featureFlag[flag];
};
