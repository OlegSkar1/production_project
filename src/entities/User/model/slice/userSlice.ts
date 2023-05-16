import { PayloadAction } from '@reduxjs/toolkit';

import { saveJsonSettings } from '../services/setJsonSettings/saveJsonSettings';
import { UserSchema, User } from '../types/user';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { setFeatureFlags } from '@/shared/lib/featureFlags';
import { buildSlice } from '@/shared/lib/store';

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = buildSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features);
    },
    getAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        const json = JSON.parse(user) as User;
        state.authData = json;
        setFeatureFlags(json.features);
      }
      state._inited = true;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveJsonSettings.fulfilled, (state, action) => {
      if (state.authData) {
        state.authData.jsonSettings = action.payload;
      }
    });
  },
});

export const { actions: userActions, reducer: userReducer, useActions: useUserActions } = userSlice;
