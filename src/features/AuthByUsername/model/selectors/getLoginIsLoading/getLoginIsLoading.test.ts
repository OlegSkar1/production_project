import { getLoginIsLoading } from './getLoginIsLoading';

import { LoginSchema } from '../../types/LoginSchema';

import { StateSchema } from 'app/providers/StoreProvider';

describe('getLoginIsLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { isLoading: true } as LoginSchema,
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {} as LoginSchema,
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
