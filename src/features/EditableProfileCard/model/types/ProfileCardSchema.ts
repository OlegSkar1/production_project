import { Profile } from 'entities/Profile';

export interface ProfileCardSchema {
  data?: Profile;
  form?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
}
