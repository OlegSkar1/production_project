import { getLoginUsername } from './getLoginUsername';

import { LoginSchema } from '../../types/LoginSchema';

import { StateSchema } from 'app/providers/StoreProvider';

describe('getLoginUsername', () => {
  test('should return admin', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'admin' } as LoginSchema,
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('admin');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {} as LoginSchema,
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
