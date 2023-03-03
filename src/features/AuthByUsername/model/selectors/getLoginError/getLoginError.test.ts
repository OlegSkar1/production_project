import { getLoginError } from './getLoginError';

import { LoginSchema } from '../../types/LoginSchema';

import { StateSchema } from 'app/providers/StoreProvider';

describe('getLoginError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { error: 'error' } as LoginSchema,
    };
    expect(getLoginError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {} as LoginSchema,
    };
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
