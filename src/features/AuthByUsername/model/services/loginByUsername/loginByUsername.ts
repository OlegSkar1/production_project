import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

interface loginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    const { rejectWithValue, dispatch, extra } = thunkApi;
    try {
      const res = await extra.api.post<User>('/login', authData);

      if (!res.data) {
        throw new Error();
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));
      dispatch(userActions.setAuthData(res.data));

      return res.data;
    } catch (error) {
      const e = error as Error;
      console.log(e);
      return rejectWithValue('error');
    }
  }
);
