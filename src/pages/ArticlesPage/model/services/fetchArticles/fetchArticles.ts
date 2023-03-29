import { createAsyncThunk } from '@reduxjs/toolkit';

import { articlesListLimit, articlesListPage } from '../../selectors/articlesList/articlesList';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getOrder, getSearch, getSort } from 'features/ArticlePageFilter';

interface FetchArticlesProps {
  replace?: boolean;
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesProps, ThunkConfig<string>>(
  'articlesList/fetchArticles',

  async (props, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;

    const limit = articlesListLimit(getState());
    const sort = getSort(getState());
    const order = getOrder(getState());
    const search = getSearch(getState());
    const page = articlesListPage(getState());

    try {
      const res = await extra.api.get<Article[]>('/articles', {
        params: { _expand: 'user', _page: page, _limit: limit, _sort: sort, _order: order, q: search },
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
