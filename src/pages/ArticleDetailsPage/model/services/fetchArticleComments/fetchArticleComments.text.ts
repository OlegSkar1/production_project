import { fetchArticleComments } from './fetchArticleComments';

import { Comment } from '@/entities/Comment';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

const comments: Comment[] = [
  {
    user: { id: '1', username: 'user1' },
    id: '1',
    text: 'text',
  },
  {
    user: { id: '1', username: 'user2' },
    id: '1',
    text: 'text',
  },
  {
    user: { id: '1', username: 'user3' },
    id: '1',
    text: 'text',
  },
];

describe('fetchArticleComments', () => {
  it('success fetch article', async () => {
    const thunk = new TestAsyncThunk(fetchArticleComments);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: comments }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(comments);
  });
  it('error fetch', async () => {
    const thunk = new TestAsyncThunk(fetchArticleComments);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk('');

    expect(thunk.api.get).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
