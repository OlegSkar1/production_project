import { getProfileData } from './getProfileData';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

describe('getProfileData', () => {
  it('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          first: 'UserName',
          lastname: 'UserLastname',
          age: '20',
          city: 'Moscow',
          username: 'nickname',
          country: Country.Russia,
          currency: Currency.RUB,
        },
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual({
      first: 'UserName',
      lastname: 'UserLastname',
      age: '20',
      city: 'Moscow',
      username: 'nickname',
      country: Country.Russia,
      currency: Currency.RUB,
    });
  });
  it('should work with empty profile data', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toBe(undefined);
  });
});
