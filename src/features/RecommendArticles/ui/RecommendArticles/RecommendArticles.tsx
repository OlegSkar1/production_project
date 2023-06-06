import { FC, memo } from 'react';

import { useFetchArticlesQuery } from '../../api/recommendArticlesApi';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { Card } from '@/shared/ui/redesigned/Card';

import cls from './RecommendArticles.module.scss';

interface RecommendArticlesProps {
  className?: string;
}
export const RecommendArticles: FC<RecommendArticlesProps> = memo((props) => {
  const { className } = props;

  const { data: articles, isLoading, isError } = useFetchArticlesQuery(4);

  if (!articles) {
    return null;
  }

  const commonProps = {
    articles: articles,
    isError: isError,
    isLoading: isLoading,
    target: __PROJECT__ !== 'storybook' ? '_blank' : undefined,
  };

  return (
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <div className={classNames('', [className], {})} data-testid='RecommendArticles'>
          <ArticleList className={cls.articles} {...commonProps} />
        </div>
      }
      on={
        <Card>
          <ArticleList className={cls.articlesRedesigned} {...commonProps} />
        </Card>
      }
    />
  );
});
