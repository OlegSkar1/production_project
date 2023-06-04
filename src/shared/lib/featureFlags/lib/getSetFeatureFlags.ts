import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localstorage';
import { FeatureFlags } from '@/shared/types/features';

const defaultFeatures: FeatureFlags = {
  isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
};

let featureFlag: FeatureFlags = {
  ...defaultFeatures,
};

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
