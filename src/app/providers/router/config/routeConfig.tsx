import { AppRoutes, routePath } from './consts';

import { AppRoutesProps } from './routeTypes';

import { Role } from '@/entities/User';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPage } from '@/pages/AdminPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';

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
  admin_panel: {
    path: routePath.admin_panel,
    element: <AdminPage />,
    authOnly: true,
    roles: [Role.ADMIN, Role.MANAGER],
  },
  forbidden: {
    path: routePath.forbidden,
    element: <ForbiddenPage />,
  },

  //last
  notFound: {
    path: routePath.notFound,
    element: <NotFoundPage />,
  },
};
