import { validateProfileErrors } from './validateProfileErrors';

import { ValidateProfileErrors } from '../../types/ProfileCardSchema';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';

const data: Profile = {
  first: 'UserName',
  lastname: 'UserLastname',
  age: '20',
  city: 'Moscow',
  username: 'nickname',
  country: Country.Russia,
  currency: Currency.RUB,
};

describe('validateProfileErrors', () => {
  it('success', () => {
    const validate = validateProfileErrors(data);
    expect(validate).toEqual([]);
  });
  it('should incorrect name', () => {
    const validate = validateProfileErrors({ ...data, first: '' });
    expect(validate).toEqual([ValidateProfileErrors.INCORRECT_DATA]);
  });
  it('should incorrect name and age', () => {
    const validate = validateProfileErrors({ ...data, first: '', age: '' });
    expect(validate).toEqual([ValidateProfileErrors.INCORRECT_DATA, ValidateProfileErrors.INCORRECT_AGE]);
  });
  it('should all validate', () => {
    const validate = validateProfileErrors({});
    expect(validate).toEqual([ValidateProfileErrors.INCORRECT_DATA, ValidateProfileErrors.INCORRECT_AGE]);
  });
  it('should no data', () => {
    const validate = validateProfileErrors();
    expect(validate).toEqual([ValidateProfileErrors.NO_DATA]);
  });
});
