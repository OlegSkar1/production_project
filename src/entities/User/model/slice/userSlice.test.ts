import { UserSchema } from '../types/user';

import { userActions, userReducer } from './userSlice';

const userValue = { id: '1', username: 'test' };

describe('userSlice', () => {
  it('should set authData', () => {
    const state: DeepPartial<UserSchema> = {
      authData: userValue,
    };
    expect(userReducer(state as UserSchema, userActions.setAuthData(userValue))).toEqual({ authData: userValue });
  });
  it('should get authData', () => {
    const state: DeepPartial<UserSchema> = {
      authData: userValue,
    };
    expect(userReducer(state as UserSchema, userActions.getAuthData())).toEqual({ authData: userValue, _inited: true });
  });
  it('should logout', () => {
    const state: DeepPartial<UserSchema> = {
      authData: userValue,
    };
    expect(userReducer(state as UserSchema, userActions.logout())).toEqual({ authData: undefined });
  });
});
