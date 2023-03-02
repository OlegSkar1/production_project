import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

export type ValueOf<T> = T[keyof T];

export type AppRoutes = ValueOf<typeof AppRoutes>;

export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',
  PROFILE: 'profile',
  NOT_FOUND: 'notFound', // несуществующий роут, должен быть последним
} as const;

export const routePath: Record<AppRoutes, string> = {
  main: '/',
  about: '/about',
  profile: '/profile',
  notFound: '*',
};

export const routeConfig: Array<RouteProps> = [
  {
    path: routePath.main,
    element: <MainPage />,
  },
  {
    path: routePath.about,
    element: <AboutPage />,
  },
  {
    path: routePath.profile,
    element: <ProfilePage />,
  },
  {
    path: routePath.notFound,
    element: <NotFoundPage />,
  },
];
