import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getRoles = (state: StateSchema) => state.user.authData?.roles;

export const isAdminRole = createSelector(getRoles, (roles) => Boolean(roles?.includes('admin')));
export const isManagerRole = createSelector(getRoles, (roles) => Boolean(roles?.includes('manager')));
