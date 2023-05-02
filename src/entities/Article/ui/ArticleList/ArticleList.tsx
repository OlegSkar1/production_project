import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  isError?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeleton = (view: ArticleView) =>
  new Array(view === 'GRID' ? 9 : 3).fill(0).map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList: FC<ArticleListProps> = memo((props) => {
  const { className, articles, isLoading, isError, target, view = ArticleView.GRID } = props;

  const { t } = useTranslation('articles');

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} view={view} key={article.id} target={target} />
  );

  if (isError) {
    return <Text text={t('article list error')} align='center' size='size_l' theme='error' />;
  }

  if (!isLoading && articles.length === 0) {
    return <Text text={t('articles not found')} align='center' size='size_l' />;
  }

  return (
    <div className={classNames(cls.articleList, [className, cls[view]], {})}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeleton(view)}
    </div>
  );
});
