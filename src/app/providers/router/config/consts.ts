export type AppRoutes = ValueOf<typeof AppRoutes>;

export const AppRoutes = {
  MAIN: 'main',
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

export const routePath: Record<AppRoutes, string> = {
  main: '/',
  about: '/about',
  profile: '/profile/:id',
  notFound: '*',
  articles: '/articles',
  article_details: '/articles/:id',
  article_edit: '/articles/:id/edit',
  article_create: '/articles/new',
  admin_panel: '/admin',
  forbidden: '/forbidden',
};
