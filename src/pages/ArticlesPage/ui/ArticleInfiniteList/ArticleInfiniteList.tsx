import { FC, memo } from 'react';

import { useSelector } from 'react-redux';

import {
  articlesListError,
  articlesListIsLoading,
  articlesListView,
} from '../../model/selectors/articlesList/articlesList';

import { articleListSelectors } from '../../model/slice/articlesListSlice/articlesListSlice';

import { ArticleList } from '@/entities/Article';

import { classNames } from '@/shared/lib/classNames/classNames';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = memo((props) => {
  const { className } = props;

  const articles = useSelector(articleListSelectors.selectAll);
  const isLoading = useSelector(articlesListIsLoading);
  const error = useSelector(articlesListError);
  const view = useSelector(articlesListView);

  return (
    <div className={classNames('', [className], {})}>
      <ArticleList articles={articles} isLoading={isLoading} view={view} isError={error} />
    </div>
  );
});
