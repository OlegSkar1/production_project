import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routeConfig } from '../config/routeConfig';

import { PageLoader } from 'features/PageLoader';

export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({ path, element }) => (
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
};
