import { createAsyncThunk } from '@reduxjs/toolkit';

import { updateFeatureFlagsMutation } from '../../api/featureFlagsApi';
import { getAllFeatureFlags } from '../../lib/getSetFeatureFlags';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeatureFlags } from '@/shared/types/features';

interface UpdateFeatureFlagsOptions {
  userId: string;
  newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlags = createAsyncThunk<void, UpdateFeatureFlagsOptions, ThunkConfig<string>>(
  'user/updateFeatureFlags',

  async ({ userId, newFeatures }, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    try {
      await dispatch(
        updateFeatureFlagsMutation({
          userId,
          features: {
            ...getAllFeatureFlags(),
            ...newFeatures,
          },
        })
      );

      window.location.reload();
    } catch (error) {
      console.log(error);

      return rejectWithValue('error');
    }
  }
);
