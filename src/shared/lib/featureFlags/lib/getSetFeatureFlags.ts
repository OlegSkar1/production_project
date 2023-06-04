import { FeatureFlags } from '@/shared/types/features';

let featureFlag: FeatureFlags = {};

export const setFeatureFlags = (newFeatureFlags?: FeatureFlags) => {
  if (newFeatureFlags) {
    featureFlag = newFeatureFlags;
  }
};

export const getFeatureFlags = (flag: keyof FeatureFlags) => {
  return featureFlag[flag];
};

export const getAllFeatureFlags = () => {
  return featureFlag;
};
