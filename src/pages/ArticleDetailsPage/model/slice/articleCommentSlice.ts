import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { addCommentForArticle } from '../services/addCommentForArticle/addCommentForArticle';
import { fetchArticleComments } from '../services/fetchArticleComments/fetchArticleComments';
import { ArticleCommentSchema } from '../types/articleCommentSchema';

import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const articleCommentAdapter = createEntityAdapter<Comment>();

export const articleCommentSelectors = articleCommentAdapter.getSelectors<StateSchema>(
  (state) => state.articleComments || articleCommentAdapter.getInitialState()
);

const articleCommentSlice = createSlice({
  name: 'articleComments',
  initialState: articleCommentAdapter.getInitialState<ArticleCommentSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticleComments.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleComments.fulfilled, (state, action) => {
        state.isLoading = false;
        articleCommentAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleComments.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addCommentForArticle.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(addCommentForArticle.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { reducer: articleCommentReducer } = articleCommentSlice;
