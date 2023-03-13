import { memo, Suspense, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';

import { RequireAuth } from './RequireAuth';

import { AppRoutesProps, routeConfig } from '../config/routeConfig';

import { PageLoader } from 'features/PageLoader';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className='content-wrapper'>{route.element}</div>
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
