import { DeepPartial } from '@reduxjs/toolkit';

import { getLoginUsername } from './getLoginUsername';

import { StateSchema } from 'app/providers/StoreProvider';

describe('getLoginUsername', () => {
  test('should return admin', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'admin' },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('admin');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {},
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
