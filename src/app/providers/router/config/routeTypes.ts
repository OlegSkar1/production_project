import { RouteProps } from 'react-router-dom';

import { Role } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: Role[];
};
