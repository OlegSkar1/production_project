import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { fetchRecommendArticles } from '../../services/fetchRecommendArticles/fetchRecommendArticles';

import { RecommendArticleSchema } from '../../types/recommendArticles';

import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

const recommendArticlesAdapter = createEntityAdapter<Article>();

export const recommendArticleSelectors = recommendArticlesAdapter.getSelectors<StateSchema>(
  (state) => state.recommendArticles || recommendArticlesAdapter.getInitialState()
);

export const recommendArticleSlice = createSlice({
  name: 'recommendArticles',
  initialState: recommendArticlesAdapter.getInitialState<RecommendArticleSchema>({
    entities: {},
    ids: [],
    isLoading: false,
    error: undefined,
    limit: 5,
  }),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRecommendArticles.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchRecommendArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        recommendArticlesAdapter.setAll(state, action.payload);
      })
      .addCase(fetchRecommendArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: recommendArticlesActions } = recommendArticleSlice;
export const { reducer: recommendArticlesReducer } = recommendArticleSlice;
