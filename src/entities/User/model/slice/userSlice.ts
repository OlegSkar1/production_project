import { PayloadAction } from '@reduxjs/toolkit';

import { getAuthData } from '../services/getAuthData/getAuthData';
import { saveJsonSettings } from '../services/setJsonSettings/saveJsonSettings';
import { UserSchema, User } from '../types/user';

import { LOCAL_STORAGE_LAST_DESIGN_KEY, USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { setFeatureFlags } from '@/shared/lib/featureFlags';
import { buildSlice } from '@/shared/lib/store';

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = buildSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<User>) => {
      state.authData = payload;
      localStorage.setItem(USER_LOCALSTORAGE_KEY, payload.id);
      localStorage.setItem(LOCAL_STORAGE_LAST_DESIGN_KEY, payload.features?.isAppRedesigned ? 'new' : 'old');
      setFeatureFlags(payload.features);
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveJsonSettings.fulfilled, (state, action) => {
        if (state.authData) {
          state.authData.jsonSettings = action.payload;
        }
      })
      .addCase(getAuthData.fulfilled, (state, { payload }) => {
        state.authData = payload;
        setFeatureFlags(payload.features);
        state._inited = true;
      })
      .addCase(getAuthData.rejected, (state) => {
        state._inited = true;
      });
  },
});

export const { actions: userActions, reducer: userReducer, useActions: useUserActions } = userSlice;
