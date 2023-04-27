import { createSelector } from '@reduxjs/toolkit';

import { generatePath } from 'react-router-dom';

import { SidebarItemsType } from '../types/items';

import { routePath } from '@/app/providers/router/config/routeConfig';
import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about_us.svg';
import ArticlesIcon from '@/shared/assets/icons/article-20-20.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';

export const getSidebarItemsList = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemsType[] = [
    {
      path: routePath.main,
      text: 'main-link',
      Icon: HomeIcon,
    },
    {
      path: routePath.about,
      text: 'about-link',
      Icon: AboutIcon,
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: generatePath(routePath.profile, { id: userData.id }),
        text: 'profile-link',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: routePath.articles,
        text: 'articles-link',
        Icon: ArticlesIcon,
        authOnly: true,
      }
    );
  }

  return sidebarItemsList;
});
