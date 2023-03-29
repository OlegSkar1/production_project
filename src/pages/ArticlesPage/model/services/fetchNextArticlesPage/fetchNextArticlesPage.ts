import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  articlesListHasMore,
  articlesListIsLoading,
  articlesListPage,
} from '../../selectors/articlesList/articlesList';

import { articlesListActions } from '../../slice/articlesListSlice/articlesListSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesList/fetchNextArticlesPage',

  (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const page = articlesListPage(getState());
    const hasMore = articlesListHasMore(getState());
    const isLoading = articlesListIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlesListActions.setPage(page + 1));
      dispatch(fetchArticles({}));
    }
  }
);
