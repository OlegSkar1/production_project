import { createAsyncThunk } from '@reduxjs/toolkit';

import { Article } from '../types/article';

import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articles/fetchArticleById',
  async (id, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;
    try {
      const res = await extra.api.get<Article>(`/articles/${id}`, {
        params: {
          _expand: 'user',
        },
      });

      if (!res.data) {
        throw new Error();
      }

      return res.data;
    } catch (error) {
      const e = error as Error;
      console.log(e);
      return rejectWithValue('error');
    }
  }
);
