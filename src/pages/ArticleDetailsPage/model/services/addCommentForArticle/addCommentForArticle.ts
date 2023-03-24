import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchArticleComments } from '../fetchArticleComments/fetchArticleComments';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleData } from 'entities/Article';

import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleComments/addCommentForArticle',

  async (text, thunkApi) => {
    const { rejectWithValue, dispatch, getState, extra } = thunkApi;

    const authData = getUserAuthData(getState());
    const article = getArticleData(getState());

    if (!authData || !article || !text) {
      return rejectWithValue('no data');
    }

    try {
      const res = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: authData.id,
        text,
      });

      if (!res.data) {
        throw new Error();
      }

      dispatch(fetchArticleComments(article.id));

      return res.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue('error');
    }
  }
);
