import { getLoginPassword } from './getLoginPassword';

import { LoginSchema } from '../../types/LoginSchema';

import { StateSchema } from 'app/providers/StoreProvider';

describe('getLoginPassword', () => {
  test('should return 123', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { password: '123' } as LoginSchema,
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {} as LoginSchema,
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
