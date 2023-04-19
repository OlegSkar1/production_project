export type Role = ValueOf<typeof Role>;

export const Role = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  USER: 'user',
} as const;

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: Role[];
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
