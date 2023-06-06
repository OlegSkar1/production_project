import { fetchProfileData } from './fetchProfileData';

import { Country } from '@/entities/Country/testing';
import { Currency } from '@/entities/Currency/testing';
import { Profile } from '@/entities/Profile/testing';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

const data: Profile = {
  first: 'UserName',
  lastname: 'UserLastname',
  age: '20',
  city: 'Moscow',
  username: 'nickname',
  country: Country.Russia,
  currency: Currency.RUB,
  id: '1',
};

describe('fetchProfileData', () => {
  it('success fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });
  it('error fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
