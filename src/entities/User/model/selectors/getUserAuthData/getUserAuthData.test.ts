import { getUserAuthData } from './getUserAuthData';

import { StateSchema } from 'app/providers/StoreProvider';

describe('getUserAuthData', () => {
  it('should return auth data', () => {
    const state: DeepPartial<StateSchema> = {
      user: { authData: { id: '1', username: 'test' } },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual({ id: '1', username: 'test' });
  });
  it('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {
      user: {},
    };
    expect(getUserAuthData(state as StateSchema)).toBe(undefined);
  });
});
