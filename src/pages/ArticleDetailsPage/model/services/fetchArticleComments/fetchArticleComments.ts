import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchArticleComments = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'articleComments/fetchArticleComments',
  async (articleId, { rejectWithValue, extra }) => {
    if (!articleId) {
      return rejectWithValue('error');
    }
    try {
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('error');
    }
  }
);
