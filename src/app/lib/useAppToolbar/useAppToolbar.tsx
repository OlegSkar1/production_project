import { ReactElement } from 'react';

import { AppRoutes } from '@/shared/const/router';
import { useCurrentRoute } from '@/shared/lib/router/useCurrentRoute';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';

export function useAppToolbar() {
  const currentRoute = useCurrentRoute();

  const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
    [AppRoutes.ARTICLES]: <ScrollToolbar />,
    [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
  };

  return toolbarByAppRoute[currentRoute];
}
