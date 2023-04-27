import { getLoginIsLoading } from './getLoginIsLoading';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginIsLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { isLoading: true },
    };
    expect(getLoginIsLoading(state as StateSchema)).toBe(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {},
    };
    expect(getLoginIsLoading(state as StateSchema)).toBe(false);
  });
});
