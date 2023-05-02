import { FC, memo } from 'react';

import { useFetchArticlesQuery } from '../../api/recommendArticlesApi';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';

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

  return (
    <div className={classNames('', [className], {})}>
      <ArticleList
        articles={articles}
        isError={isError}
        isLoading={isLoading}
        className={cls.articles}
        target='_blank'
      />
    </div>
  );
});
