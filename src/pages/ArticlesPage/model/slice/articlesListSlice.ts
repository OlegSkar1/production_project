import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ArticlesListSchema } from '../types/articles';

import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';

const articlesListAdapter = createEntityAdapter<Article>();

export const articleListSelectors = articlesListAdapter.getSelectors<StateSchema>(
  (state) => state.articlesList || articlesListAdapter.getInitialState()
);

export const articlesListSlice = createSlice({
  name: 'articlesList',
  initialState: articlesListAdapter.getInitialState<ArticlesListSchema>({
    entities: {},
    ids: [],
    view: ArticleView.GRID,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
    },
  },
});

export const { actions: articlesListActions } = articlesListSlice;
export const { reducer: articlesListReducer } = articlesListSlice;
