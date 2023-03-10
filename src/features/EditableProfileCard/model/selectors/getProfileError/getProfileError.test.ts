import { getProfileError } from './getProfileError';

import { StateSchema } from 'app/providers/StoreProvider';

describe('getProfileError', () => {
  it('should return error profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { error: 'error' },
    };
    expect(getProfileError(state as StateSchema)).toBe('error');
  });
  it('should work with empty profile error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toBe(undefined);
  });
});
