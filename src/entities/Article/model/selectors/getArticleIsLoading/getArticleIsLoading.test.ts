/* eslint-disable max-len */
import { getArticleIsLoading } from './getArticleIsLoading';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticleIsLoading', () => {
  it('should return article error', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        isLoading: true,
      },
    };
    expect(getArticleIsLoading(state as StateSchema)).toBe(true);
  });
  it('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {
      article: {},
    };
    expect(getArticleIsLoading(state as StateSchema)).toBe(false);
  });
});
