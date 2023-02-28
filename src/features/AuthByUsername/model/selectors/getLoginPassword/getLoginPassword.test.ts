import { DeepPartial } from '@reduxjs/toolkit';

import { getLoginPassword } from './getLoginPassword';

import { StateSchema } from 'app/providers/StoreProvider';

describe('getLoginPassword', () => {
  test('should return 123', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { password: '123' },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {},
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
