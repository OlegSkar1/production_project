import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemsType } from '../types/items';

import { getUserAuthData } from '@/entities/User';
import AboutIconDeprecated from '@/shared/assets/icons/about_us.svg';
import ArticlesIconDeprecated from '@/shared/assets/icons/article-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import InfoIcon from '@/shared/assets/icons/infoIcon.svg';
import HomeIconDeprecated from '@/shared/assets/icons/main-20-20.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg';
import ProfileIcon from '@/shared/assets/icons/user-avatar.svg';
import { getRouteProfile, getRouteMain, getRouteAbout, getRouteArticles } from '@/shared/const/router';
import { toggleFeature } from '@/shared/lib/featureFlags';

export const getSidebarItemsList = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemsType[] = [
    {
      path: getRouteMain(),
      text: 'main-link',
      Icon: toggleFeature({
        name: 'isAppRedesigned',
        off: () => HomeIconDeprecated,
        on: () => HomeIcon,
      }),
    },
    {
      path: getRouteAbout(),
      text: 'about-link',
      Icon: toggleFeature({
        name: 'isAppRedesigned',
        off: () => AboutIconDeprecated,
        on: () => InfoIcon,
      }),
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        text: 'profile-link',
        Icon: toggleFeature({
          name: 'isAppRedesigned',
          off: () => ProfileIconDeprecated,
          on: () => ProfileIcon,
        }),
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: 'articles-link',
        Icon: toggleFeature({
          name: 'isAppRedesigned',
          off: () => ArticlesIconDeprecated,
          on: () => ArticleIcon,
        }),
        authOnly: true,
      }
    );
  }

  return sidebarItemsList;
});
