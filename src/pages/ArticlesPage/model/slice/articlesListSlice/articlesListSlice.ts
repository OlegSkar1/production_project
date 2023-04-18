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
    limit: 9,
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
      .addCase(fetchArticles.pending, (state, action) => {
        state.isError = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesListAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.limit ? (state.hasMore = action.payload.length >= state.limit) : null;
        if (action.meta.arg.replace) {
          articlesListAdapter.setAll(state, action.payload);
        } else {
          articlesListAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { actions: articlesListActions } = articlesListSlice;
export const { reducer: articlesListReducer } = articlesListSlice;
