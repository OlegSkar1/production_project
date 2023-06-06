import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAuthDataQuery } from '../../../api/userApi';
import { User } from '../../types/user';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { LOCAL_STORAGE_LAST_DESIGN_KEY, USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export const getAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/getAuthData',

  async (_, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return rejectWithValue('no data');
    }

    try {
      const res = await dispatch(getAuthDataQuery(userId)).unwrap();

      localStorage.setItem(LOCAL_STORAGE_LAST_DESIGN_KEY, res.features?.isAppRedesigned ? 'new' : 'old');

      return res;
    } catch (error) {
      console.log(error);

      return rejectWithValue('error');
    }
  }
);
