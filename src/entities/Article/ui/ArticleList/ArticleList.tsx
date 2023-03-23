import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticleList.module.scss';

import { Article, ArticleView } from '../../model/types/article';

import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeleton = (view: ArticleView) =>
  new Array(view === 'GRID' ? 9 : 3).fill(0).map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList: FC<ArticleListProps> = (props) => {
  const { className, articles, isLoading, view = ArticleView.GRID } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return <div className={classNames(cls.articleList, [className], {})}>{getSkeleton(view)}</div>;
  }

  const renderArticle = (article: Article) => <ArticleListItem article={article} view={view} key={article.id} />;

  return (
    <div className={classNames(cls.articleList, [className], {})}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
};
