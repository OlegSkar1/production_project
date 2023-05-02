import { memo, Suspense, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routeConfig } from '../config/routeConfig';
import { AppRoutesProps } from '../config/routeTypes';

import { RequireAuth } from './RequireAuth';

import { PageLoader } from '@/features/PageLoader';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
