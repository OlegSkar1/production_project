import { createAsyncThunk } from '@reduxjs/toolkit';

import { ValidateProfileErrors } from '../../consts/consts';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

import { validateProfileErrors } from '../validateProfileErrors/validateProfileErrors';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileErrors[]>>(
  'profile/updateProfileData',
  async (_, { rejectWithValue, extra, getState }) => {
    const formData = getProfileForm(getState());
    const errors = validateProfileErrors(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
    }
  }
);
