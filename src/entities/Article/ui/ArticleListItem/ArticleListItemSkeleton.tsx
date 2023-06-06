import { FC } from 'react';

import { ArticleView } from '../../model/types/article';

import { ArticleListItemSkeletonDeprecated } from './ArticleListItemSkeletonDeprecated';
import { ArticleListItemSkeletonRedesigned } from './ArticleListItemSkeletonRedesigned';

import { ToggleFeature } from '@/shared/lib/featureFlags';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = (props) => {
  return (
    <ToggleFeature
      name='isAppRedesigned'
      off={<ArticleListItemSkeletonDeprecated {...props} />}
      on={<ArticleListItemSkeletonRedesigned {...props} />}
    />
  );
};
