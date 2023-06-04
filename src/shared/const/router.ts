export type AppRoutes = ValueOf<typeof AppRoutes>;

export const AppRoutes = {
  MAIN: 'main',
  SETTINGS: 'settings',
  ABOUT: 'about',
  ADMIN_PANEL: 'admin_panel',
  PROFILE: 'profile',
  ARTICLES: 'articles',
  ARTICLE_DETAILS: 'article_details',
  ARTICLE_EDIT: 'article_edit',
  ARTICLE_CREATE: 'article_create',
  FORBIDDEN: 'forbidden',

  // несуществующий роут, должен быть последним
  NOT_FOUND: 'notFound',
} as const;

export const getRouteMain = () => '/';
export const getRouteSettings = () => '/settings';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

export const appRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteSettings()]: AppRoutes.SETTINGS,
  [getRouteAbout()]: AppRoutes.ABOUT,
  [getRouteProfile(':id')]: AppRoutes.PROFILE,
  [getRouteArticles()]: AppRoutes.ARTICLES,
  [getRouteArticleDetails(':id')]: AppRoutes.ARTICLE_DETAILS,
  [getRouteArticleEdit(':id')]: AppRoutes.ARTICLE_EDIT,
  [getRouteArticleCreate()]: AppRoutes.ARTICLE_CREATE,
  [getRouteAdminPanel()]: AppRoutes.ADMIN_PANEL,
  [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
