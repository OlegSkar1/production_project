import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticles = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlesList/fetchArticles',

  async (_, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      const res = await extra.api.get<Article[]>('/articles', {
        params: { _expand: 'user' },
      });

      if (!res.data) {
        throw new Error();
      }

      return res.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue('error');
    }
  }
);
