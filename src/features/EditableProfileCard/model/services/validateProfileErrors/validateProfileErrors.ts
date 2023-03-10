import { ValidateProfileErrors } from '../../types/ProfileCardSchema';

import { Profile } from 'entities/Profile';

export const validateProfileErrors = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileErrors.NO_DATA];
  }

  const { first, lastname, age } = profile;

  const errors: ValidateProfileErrors[] = [];

  if (!first || !lastname) {
    errors.push(ValidateProfileErrors.INCORRECT_DATA);
  }

  if (!age) {
    errors.push(ValidateProfileErrors.INCORRECT_AGE);
  }

  return errors;
};
