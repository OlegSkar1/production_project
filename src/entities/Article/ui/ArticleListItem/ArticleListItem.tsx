import { FC, HTMLAttributeAnchorTarget } from 'react';

import { Article, ArticleView } from '../../model/types/article';

import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';

import { ToggleFeature } from '@/shared/lib/featureFlags';

export interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
  return (
    <ToggleFeature
      name='isAppRedesigned'
      off={<ArticleListItemDeprecated {...props} />}
      on={<ArticleListItemRedesigned {...props} />}
    />
  );
};
