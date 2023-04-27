/* eslint-disable max-len */
import { getArticleError } from './getArticleError';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticleError', () => {
  it('should return article error', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        error: 'error',
      },
    };
    expect(getArticleError(state as StateSchema)).toBe('error');
  });
  it('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {
      article: {},
    };
    expect(getArticleError(state as StateSchema)).toBe(undefined);
  });
});
