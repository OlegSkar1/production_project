import { Profile } from 'entities/Profile';

export enum ValidateProfileErrors {
  NO_DATA = 'no_data',
  INCORRECT_DATA = 'incorrect_data',
  INCORRECT_AGE = 'incorrect_age',
  SERVER_ERROR = 'server_error',
}

export interface ProfileCardSchema {
  data?: Profile;
  form?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  validateErrors?: ValidateProfileErrors[];
}
