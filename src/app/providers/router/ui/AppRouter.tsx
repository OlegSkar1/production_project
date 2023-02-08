import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeConfig.map(({ path, element }) => (
          <Route key={path} path={path} element={<div className="content-wrapper">{element}</div>} />
        ))}
      </Routes>
    </Suspense>
  );
};
