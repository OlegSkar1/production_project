import { createAsyncThunk } from '@reduxjs/toolkit';

import { articlesListInited } from '../../../selectors/articlesList/articlesList';
import { articlesListActions } from '../../../slice/articlesListSlice/articlesListSlice';
import { fetchArticles } from '../../fetchArticles/fetchArticles';

import { ThunkConfig } from 'app/providers/StoreProvider';

export const initedFetchArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesList/initedFetchArticles',

  async (_, thunkApi) => {
    const { dispatch, getState } = thunkApi;

    const inited = articlesListInited(getState());

    if (!inited) {
      dispatch(articlesListActions.getInitView());
      dispatch(fetchArticles({}));
    }
  }
);
