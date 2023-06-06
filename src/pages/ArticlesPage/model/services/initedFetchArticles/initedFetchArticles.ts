import { URLSearchParams } from 'url';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { articlesListInited } from '../../selectors/articlesList/articlesList';
import { articlesListActions } from '../../slice/articlesListSlice/articlesListSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleType, SortType } from '@/entities/Article';
import { articlesFilterActions } from '@/features/ArticlePageFilter';
import { OrderType } from '@/shared/types/sort';

export const initedFetchArticles = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesList/initedFetchArticles',

  async (searchParams, thunkApi) => {
    const { dispatch, getState } = thunkApi;

    const inited = articlesListInited(getState());

    const sort = searchParams.get('sort');
    const order = searchParams.get('order');
    const search = searchParams.get('search');
    const type = searchParams.get('type');

    if (!inited) {
      dispatch(articlesFilterActions.setSort((sort as SortType) ?? SortType.CREATED_AT));
      dispatch(articlesFilterActions.setOrder((order as OrderType) ?? 'asc'));
      dispatch(articlesFilterActions.setSearch(search ?? ''));
      dispatch(articlesFilterActions.setTab((type as ArticleType) ?? 'ALL'));

      dispatch(articlesListActions.getInitView());
      dispatch(fetchArticles({ searchParams }));
    }
  }
);
