import { DeepPartial } from '@reduxjs/toolkit';

import { getLoginError } from './getLoginError';

import { StateSchema } from 'app/providers/StoreProvider';

describe('getLoginError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { error: 'error' },
    };
    expect(getLoginError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {},
    };
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
