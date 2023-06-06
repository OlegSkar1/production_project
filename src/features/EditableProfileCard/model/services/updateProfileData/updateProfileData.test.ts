import { ValidateProfileErrors } from '../../consts/consts';

import { updateProfileData } from './updateProfileData';

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
};

describe('updateProfileData', () => {
  it('success update', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });
  it('update error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR]);
  });
  it('error validate', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...data,
          first: '',
        },
      },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrors.INCORRECT_DATA]);
  });
});
