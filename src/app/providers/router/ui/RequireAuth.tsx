import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { routePath } from '../config/routeConfig';

import { Role, getRoles, getUserAuthData } from 'entities/User';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: Role[];
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const location = useLocation();
  const isAuth = useSelector(getUserAuthData);
  const userRoles = useSelector(getRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requireRole) => {
      const hasRole = userRoles?.includes(requireRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  if (!isAuth) {
    return <Navigate to={routePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={routePath.forbidden} state={{ from: location }} replace />;
  }

  return children;
};
