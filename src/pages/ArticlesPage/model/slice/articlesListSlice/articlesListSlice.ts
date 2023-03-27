import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticles } from '../../services/fetchArticles/fetchArticles';
import { ArticlesListSchema } from '../../types/articles';

import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export const articlesListAdapter = createEntityAdapter<Article>();

export const articleListSelectors = articlesListAdapter.getSelectors<StateSchema>(
  (state) => state.articlesList || articlesListAdapter.getInitialState()
);

export const articlesListSlice = createSlice({
  name: 'articlesList',
  initialState: articlesListAdapter.getInitialState<ArticlesListSchema>({
    entities: {},
    ids: [],
    view: ArticleView.GRID,
    page: 1,
    hasMore: true,
    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    getInitView: (state) => {
      const savedView = localStorage.getItem(VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state._inited = true;

      if (savedView) {
        state.view = savedView;
        state.limit = savedView === ArticleView.GRID ? 9 : 4;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        articlesListAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlesListActions } = articlesListSlice;
export const { reducer: articlesListReducer } = articlesListSlice;
