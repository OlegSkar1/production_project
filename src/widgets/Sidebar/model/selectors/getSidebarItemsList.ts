import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemsType } from '../types/items';

import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about_us.svg';
import ArticlesIcon from '@/shared/assets/icons/article-20-20.svg';
import HomeIcon from '@/shared/assets/icons/main-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import { getRouteProfile, getRouteMain, getRouteAbout, getRouteArticles } from '@/shared/const/router';

export const getSidebarItemsList = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemsType[] = [
    {
      path: getRouteMain(),
      text: 'main-link',
      Icon: HomeIcon,
    },
    {
      path: getRouteAbout(),
      text: 'about-link',
      Icon: AboutIcon,
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        text: 'profile-link',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: 'articles-link',
        Icon: ArticlesIcon,
        authOnly: true,
      }
    );
  }

  return sidebarItemsList;
});
