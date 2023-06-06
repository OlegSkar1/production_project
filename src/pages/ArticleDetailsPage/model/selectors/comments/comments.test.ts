import { articleDetailsCommentsError, articleDetailsCommentsIsLoading } from './comments';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('comments', () => {
  test('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleComments: {
        isLoading: true,
      },
    };
    expect(articleDetailsCommentsIsLoading(state as StateSchema)).toBe(true);
  });
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleComments: {
        error: 'error',
      },
    };
    expect(articleDetailsCommentsError(state as StateSchema)).toBe('error');
  });
});
