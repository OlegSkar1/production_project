import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { addCommentForArticle } from '../services/addCommentForArticle';
import { fetchArticleComments } from '../services/fetchArticleComments';
import { articleCommentSchema } from '../types/articleCommentSchema';

import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const articleCommentAdapter = createEntityAdapter<Comment>();

export const articleCommentSelectors = articleCommentAdapter.getSelectors<StateSchema>(
  (state) => state.articleComments || articleCommentAdapter.getInitialState()
);

const articleCommentSlice = createSlice({
  name: 'articleComment',
  initialState: articleCommentAdapter.getInitialState<articleCommentSchema>({
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
      });
  },
});

export const { reducer: articleCommentReducer } = articleCommentSlice;
