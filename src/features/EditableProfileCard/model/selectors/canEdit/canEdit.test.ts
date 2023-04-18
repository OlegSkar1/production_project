import { canEdit } from './canEdit';

import { Profile } from 'entities/Profile';
import { User } from 'entities/User';

describe('canEdit', () => {
  test('should return true', () => {
    const user: DeepPartial<User> = { id: '1' };
    const profile: DeepPartial<Profile> = { id: '1' };

    const result = canEdit.resultFunc(user as User, profile);

    expect(result).toBe(true);
  });
  test('should return false', () => {
    const user: DeepPartial<User> = { id: '1' };
    const profile: DeepPartial<Profile> = { id: '2' };

    const result = canEdit.resultFunc(user as User, profile);

    expect(result).toBe(false);
  });
});
