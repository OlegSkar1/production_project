import { FC, HTMLAttributeAnchorTarget, memo } from 'react';

import { useTranslation } from 'react-i18next';

import cls from './ArticleList.module.scss';

import { Article, ArticleView } from '../../model/types/article';

import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  error?: string;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeleton = (view: ArticleView) =>
  new Array(view === 'GRID' ? 9 : 3).fill(0).map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList: FC<ArticleListProps> = memo((props) => {
  const { className, articles, isLoading, error, target, view = ArticleView.GRID } = props;

  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} view={view} key={article.id} target={target} />
  );

  if (!isLoading && articles.length === 0) {
    return <Text text={t('articles not found')} align='center' size='size_l' />;
  }

  return (
    <div className={classNames(cls.articleList, [className, cls[view]], {})}>
      {error && <Text text={t('articles not found')} align='center' size='size_l' />}
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeleton(view)}
    </div>
  );
});