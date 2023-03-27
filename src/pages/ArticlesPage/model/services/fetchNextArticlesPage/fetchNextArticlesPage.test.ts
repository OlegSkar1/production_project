import { fetchNextArticlesPage } from './fetchNextArticlesPage';

import { fetchArticles } from '../fetchArticles/fetchArticles';

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('../fetchArticles/fetchArticles');

describe('fetchNextArticlesPage', () => {
  it('success fetch next page', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesList: {
        entities: {},
        ids: [],
        limit: 5,
        page: 1,
        hasMore: true,
        isLoading: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticles).toBeCalledWith({ page: 2 });
  });
  it('should not to be fetch', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesList: {
        entities: {},
        ids: [],
        limit: 5,
        page: 1,
        hasMore: false,
        isLoading: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticles).not.toBeCalled();
  });
  it('should not to be fetch if loading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesList: {
        entities: {},
        ids: [],
        limit: 5,
        page: 1,
        hasMore: true,
        isLoading: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticles).not.toBeCalled();
  });
});
