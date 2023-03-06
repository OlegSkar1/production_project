import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProfileData } from '../services/fetchProfileData';

import { ProfileCardSchema } from '../types/ProfileCardSchema';

import { Profile } from 'entities/Profile';

const initialState: ProfileCardSchema = {
  data: undefined,
  form: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
};

export const profileCardSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    setCancel: (state) => {
      state.readonly = true;
      state.form = state.data;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: profileCardActions } = profileCardSlice;
export const { reducer: profileCardReducer } = profileCardSlice;
