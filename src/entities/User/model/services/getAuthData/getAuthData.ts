import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAuthDataQuery } from '../../../api/userApi';
import { User } from '../../types/user';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export const getAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  '/getAuthData',

  async (_, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return rejectWithValue('');
    }

    try {
      const res = await dispatch(getAuthDataQuery(userId)).unwrap();

      return res;
    } catch (error) {
      console.log(error);

      return rejectWithValue('error');
    }
  }
);
