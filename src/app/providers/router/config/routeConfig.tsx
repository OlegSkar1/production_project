import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export type AppRoutes = ValueOf<typeof AppRoutes>;

export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',
  PROFILE: 'profile',
  ARTICLES: 'articles',
  ARTICLES_DETAILS: 'articles_details',

  // несуществующий роут, должен быть последним
  NOT_FOUND: 'notFound',
} as const;

export const routePath: Record<AppRoutes, string> = {
  main: '/',
  about: '/about',
  profile: '/profile/', // + id
  notFound: '*',
  articles: '/articles',
  articles_details: '/articles/', // + id
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  main: {
    path: routePath.main,
    element: <MainPage />,
  },
  about: {
    path: routePath.about,
    element: <AboutPage />,
  },
  profile: {
    path: routePath.profile + ':id',
    element: <ProfilePage />,
    authOnly: true,
  },
  articles: {
    path: routePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  articles_details: {
    path: routePath.articles_details + ':id',
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  notFound: {
    path: routePath.notFound,
    element: <NotFoundPage />,
  },
};
