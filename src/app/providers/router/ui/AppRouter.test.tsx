import { screen } from '@testing-library/react';

import { AppRouter } from './AppRouter';

import {
  getRouteAbout,
  getRouteAdminPanel,
  getRouteArticleCreate,
  getRouteArticleDetails,
  getRouteArticleEdit,
  getRouteArticles,
  getRouteProfile,
} from '@/shared/const/router';
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';

describe('app/providers/router/AppRouter', () => {
  it('should be render main page', async () => {
    ComponentRender(<AppRouter />);

    const mainPage = await screen.findByTestId('MainPage');

    expect(mainPage).toBeInTheDocument();
  });
  it('should be render about page', async () => {
    ComponentRender(<AppRouter />, { route: getRouteAbout() });

    const aboutPage = await screen.findByTestId('AboutPage');

    expect(aboutPage).toBeInTheDocument();
  });
  it("should be don't pass admin panel, render forbidden page if user haven't roles", async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: { user: { _inited: true, authData: {} } },
    });

    const forbiddenPage = await screen.findByTestId('ForbiddenPage');

    expect(forbiddenPage).toBeInTheDocument();
  });
  it('should be pass admin panel', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: { user: { _inited: true, authData: { roles: ['admin'] } } },
    });

    const adminPage = await screen.findByTestId('AdminPage');

    expect(adminPage).toBeInTheDocument();
  });
  it('should be render profile page', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: { _inited: true, authData: { roles: ['admin'], id: '1' } },
        profile: { data: { id: '1' } },
      },
    });

    const profilePage = await screen.findByTestId('ProfilePage');

    expect(profilePage).toBeInTheDocument();
  });
  it('should be render articles page', async () => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;

    ComponentRender(<AppRouter />, {
      route: getRouteArticles(),
      initialState: { user: { _inited: true, authData: { roles: ['admin'], id: '1' } }, articlesList: {} },
    });

    const articlesPage = await screen.findByTestId('ArticlesPage');

    expect(articlesPage).toBeInTheDocument();
  });
  it('should be render article detail page', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteArticleDetails('1'),
      initialState: {
        user: { _inited: true, authData: { roles: ['admin'], id: '1' } },
        article: { data: { id: '1' } },
        articleComments: {},
      },
    });

    const articleDetailsPage = await screen.findByTestId('ArticleDetailsPage');

    expect(articleDetailsPage).toBeInTheDocument();
  });
  it('should be render edit article', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteArticleEdit('1'),
      initialState: {
        user: { _inited: true, authData: { roles: ['admin'], id: '1' } },
        article: { data: { id: '1' } },
      },
    });

    const articleEditPage = await screen.findByTestId('ArticleEditPage');

    expect(articleEditPage).toBeInTheDocument();
  });
  it('should be render create article', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteArticleCreate(),
      initialState: {
        user: { _inited: true, authData: { roles: ['admin'], id: '1' } },
      },
    });

    const articleCreatePage = await screen.findByTestId('ArticleCreatePage');

    expect(articleCreatePage).toBeInTheDocument();
  });
  it('should be redirect to main page if user not auth', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteArticles(),
    });

    const mainPage = await screen.findByTestId('MainPage');

    expect(mainPage).toBeInTheDocument();
  });
  it('should be page not found', async () => {
    ComponentRender(<AppRouter />, { route: '/dsfdsfds' });

    const notFoundPage = await screen.findByTestId('NotFoundPage');

    expect(notFoundPage).toBeInTheDocument();
  });
});
