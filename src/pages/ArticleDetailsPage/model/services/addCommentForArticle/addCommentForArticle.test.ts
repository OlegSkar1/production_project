import { addCommentForArticle } from './addCommentForArticle';

import { StateSchema } from 'app/providers/StoreProvider';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

const comment = {
  articleId: '1',
  userId: '1',
  text: 'text',
};

const state: DeepPartial<StateSchema> = {
  article: {
    data: {
      id: '1',
    },
  },
  user: {
    authData: {
      id: '1',
    },
  },
};

describe('addCommentForArticle', () => {
  it('success add article', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, state);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));

    const result = await thunk.callThunk('text');

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(comment);
  });
  it('error no data', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));

    const result = await thunk.callThunk('');

    expect(thunk.api.post).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
  it('error add comment', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk('text');

    expect(thunk.api.post).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
