import { createAsyncThunk } from '@reduxjs/toolkit';

import { articlesListLimit } from '../../selectors/articlesList/articlesList';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

interface fetchArticlesProps {
  page: number;
}

export const fetchArticles = createAsyncThunk<Article[], fetchArticlesProps, ThunkConfig<string>>(
  'articlesList/fetchArticles',

  async (props, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;

    const { page = 1 } = props;

    const limit = articlesListLimit(getState());

    try {
      const res = await extra.api.get<Article[]>('/articles', {
        params: { _expand: 'user', _page: page, _limit: limit },
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
