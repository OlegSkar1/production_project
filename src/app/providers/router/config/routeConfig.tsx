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
import {
  AppRoutes,
  getRouteAbout,
  getRouteAdminPanel,
  getRouteArticleCreate,
  getRouteArticleDetails,
  getRouteArticleEdit,
  getRouteArticles,
  getRouteForbidden,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/routeTypes';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  main: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  about: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  profile: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  articles: {
    path: getRouteArticles(),
    element: <ArticlesPage />,
    authOnly: true,
  },
  article_details: {
    path: getRouteArticleDetails(':id'),
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  article_edit: {
    path: getRouteArticleEdit(':id'),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  article_create: {
    path: getRouteArticleCreate(),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  admin_panel: {
    path: getRouteAdminPanel(),
    element: <AdminPage />,
    authOnly: true,
    roles: [Role.ADMIN, Role.MANAGER],
  },
  forbidden: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },

  //last
  notFound: {
    path: '*',
    element: <NotFoundPage />,
  },
};
