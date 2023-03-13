import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { routePath } from '../config/routeConfig';

import { getUserAuthData } from 'entities/User';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const isAuth = useSelector(getUserAuthData);

  if (!isAuth) {
    return <Navigate to={routePath.main} state={{ from: location }} replace />;
  }

  return children;
};
