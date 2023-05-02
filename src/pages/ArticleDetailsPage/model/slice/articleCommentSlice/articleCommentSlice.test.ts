import { fetchArticleComments } from '../../services/fetchArticleComments/fetchArticleComments';
import { ArticleCommentSchema } from '../../types/articleCommentSchema';

import { articleCommentReducer } from './articleCommentSlice';

import { Comment } from '@/entities/Comment/testing';
const state: ArticleCommentSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
};

describe('articleCommentSlice', () => {
  it('test service fulfilled', () => {
    const data: Comment[] = [
      { id: '1', text: 'text', user: { id: '1', username: 'user1' } },
      { id: '2', text: 'text', user: { id: '2', username: 'user2' } },
    ];
    expect(articleCommentReducer(state, fetchArticleComments.fulfilled(data, '', ''))).toEqual({
      isLoading: false,
      ids: ['1', '2'],
      entities: {
        '1': { id: '1', text: 'text', user: { id: '1', username: 'user1' } },
        '2': { id: '2', text: 'text', user: { id: '2', username: 'user2' } },
      },
      error: undefined,
    });
  });
});
