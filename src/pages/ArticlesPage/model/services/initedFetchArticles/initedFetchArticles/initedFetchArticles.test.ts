import { initedFetchArticles } from './initedFetchArticles';

import { fetchArticles } from '../../fetchArticles/fetchArticles';

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('../../fetchArticles/fetchArticles');

describe('initedFetchArticles', () => {
  it('fetch articlesList if not inited', async () => {
    const thunk = new TestAsyncThunk(initedFetchArticles, {
      articlesList: {
        entities: {},
        ids: [],
        limit: 5,
        page: 1,
        hasMore: true,
        isLoading: false,
        _inited: false,
        view: 'GRID',
      },
    });

    await thunk.callThunk(new URLSearchParams('sort=recent&order=asc&search=testing&type=ALL'));

    expect(thunk.dispatch).toHaveBeenCalledTimes(8);
    expect(fetchArticles).toBeCalled();
  });
  it('should not to be fetch if inited', async () => {
    const thunk = new TestAsyncThunk(initedFetchArticles, {
      articlesList: {
        entities: {},
        ids: [],
        limit: 5,
        page: 1,
        hasMore: false,
        isLoading: false,
        _inited: true,
      },
    });

    await thunk.callThunk(new URLSearchParams('sort=recent&order=asc&search=testing&type=ALL'));

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticles).not.toBeCalled();
  });
});
