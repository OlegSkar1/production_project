import { createSelector } from '@reduxjs/toolkit';

import { getProfileData } from '../getProfileData/getProfileData';

import { getUserAuthData } from '@/entities/User';

export const canEdit = createSelector(getUserAuthData, getProfileData, (userData, profileData) => {
  if (userData && profileData) {
    return userData.id === profileData.id;
  }
});
