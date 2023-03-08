import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { routeConfig } from '../config/routeConfig';

import { getUserAuthData } from 'entities/User';
import { PageLoader } from 'features/PageLoader';

export const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(
    () =>
      Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
          return false;
        }
        return true;
      }),
    [isAuth]
  );

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className='content-wrapper'>{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
});
