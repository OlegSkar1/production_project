import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
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
  ARTICLE_DETAILS: 'article_details',
  ARTICLE_EDIT: 'article_edit',
  ARTICLE_CREATE: 'article_create',

  // несуществующий роут, должен быть последним
  NOT_FOUND: 'notFound',
} as const;

export const routePath: Record<AppRoutes, string> = {
  main: '/',
  about: '/about',
  profile: '/profile/:id',
  notFound: '*',
  articles: '/articles',
  article_details: '/articles/:id',
  article_edit: '/articles/:id/edit',
  article_create: '/articles/new',
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
    path: routePath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
  articles: {
    path: routePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  article_details: {
    path: routePath.article_details,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  article_edit: {
    path: routePath.article_edit,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  article_create: {
    path: routePath.article_create,
    element: <ArticleEditPage />,
    authOnly: true,
  },

  //last
  notFound: {
    path: routePath.notFound,
    element: <NotFoundPage />,
  },
};
