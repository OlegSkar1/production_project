import { getProfileReadonly } from './getProfileReadonly';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileReadonly', () => {
  it('should return readonly profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { readonly: true },
    };
    expect(getProfileReadonly(state as StateSchema)).toBe(true);
  });
  it('should work with empty profile readonly', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toBe(undefined);
  });
});
