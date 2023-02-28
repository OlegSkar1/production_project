import { DeepPartial } from '@reduxjs/toolkit';

import { loginActions, loginReducer } from './loginSlice';

import { LoginSchema } from '../types/LoginSchema';

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('oleg'))).toEqual({ username: 'oleg' });
  });
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual({ password: '123' });
  });
});
