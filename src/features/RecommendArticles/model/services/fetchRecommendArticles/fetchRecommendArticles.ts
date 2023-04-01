import { createAsyncThunk } from '@reduxjs/toolkit';

import { getRecommendArticleLimit } from '../../selectors/recommendArticleSelectors/recommendArticleSelectors';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchRecommendArticles = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'recommendArticles/fetchRecommendArticles',

  async (_, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;

    const limit = getRecommendArticleLimit(getState());

    try {
      const res = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
        },
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
