import { RouteProps } from 'react-router-dom';

// eslint-disable-next-line olegskar-fsd-checker/layer-imports
import { Role } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: Role[];
};
