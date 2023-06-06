import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import { appRouteByPathPattern, AppRoutes } from '@/shared/const/router';

export function useCurrentRoute() {
  const location = useLocation();
  const [appRoute, setAppRoute] = useState<AppRoutes>(AppRoutes.MAIN);

  useEffect(() => {
    Object.entries(appRouteByPathPattern).forEach(([pattern, route]) => {
      if (matchPath(pattern, location.pathname)) {
        setAppRoute(route);
      }
    });
  }, [location.pathname]);

  return appRoute;
}
