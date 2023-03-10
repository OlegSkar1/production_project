import { getProfileIsLoading } from './getProfileIsLoading';

import { StateSchema } from 'app/providers/StoreProvider';

describe('getProfileIsLoading', () => {
  it('should return loading profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { isLoading: true },
    };
    expect(getProfileIsLoading(state as StateSchema)).toBe(true);
  });
  it('should work with empty profile loading', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(state as StateSchema)).toBe(undefined);
  });
});
