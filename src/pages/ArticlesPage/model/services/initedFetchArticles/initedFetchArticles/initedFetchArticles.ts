import { createAsyncThunk } from '@reduxjs/toolkit';

import { URLSearchParams } from 'url';

import { articlesListInited } from '../../../selectors/articlesList/articlesList';
import { articlesListActions } from '../../../slice/articlesListSlice/articlesListSlice';
import { fetchArticles } from '../../fetchArticles/fetchArticles';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortType } from 'entities/Article';
import { articlesFilterActions } from 'features/ArticlePageFilter/model/slice/filterSlice';
import { OrderType } from 'shared/types';

export const initedFetchArticles = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesList/initedFetchArticles',

  async (searchParams, thunkApi) => {
    const { dispatch, getState } = thunkApi;

    const inited = articlesListInited(getState());

    const sort = searchParams.get('sort');
    const order = searchParams.get('order');
    const search = searchParams.get('search');

    if (!inited) {
      dispatch(articlesFilterActions.setSort((sort as SortType) ?? ''));
      dispatch(articlesFilterActions.setOrder((order as OrderType) ?? ''));
      dispatch(articlesFilterActions.setSearch(search ?? ''));

      dispatch(articlesListActions.getInitView());
      dispatch(fetchArticles({}));
    }
  }
);
