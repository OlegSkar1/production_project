import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface loginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.post<User>('http://localhost:8000/login', authData);

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
