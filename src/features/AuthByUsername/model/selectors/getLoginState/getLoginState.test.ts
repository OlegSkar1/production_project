import { getLoginState } from './getLoginState';

import { StateSchema } from 'app/providers/StoreProvider';

describe('getLoginState', () => {
  it('should return login state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'user',
        password: 'pass',
      },
    };
    expect(getLoginState(state as StateSchema)).toEqual({
      username: 'user',
      password: 'pass',
    });
  });
  it('should work with empty login state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginState(state as StateSchema)).toBe(undefined);
  });
});
