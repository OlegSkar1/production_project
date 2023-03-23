import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticleListItem.module.scss';

import { Article, ArticleView, TextBlock } from '../../model/types/article';

import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

import { routePath } from 'app/providers/router/config/routeConfig';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, Avatar, Card, Icon, Skeleton, Text } from 'shared/ui';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = (props) => {
  const { className, view } = props;
  const { t } = useTranslation('articles');

  const types = <Skeleton width={100} height={16} className={cls.types} />;
  const views = <Skeleton width={50} height={16} />;

  if (view === ArticleView.LIST) {
    return (
      <div className={classNames('', [className, cls[view]], {})}>
        <Card>
          <div className={cls.headerWrapper}>
            <Skeleton variant='circle' width={30} height={30} />
            <Skeleton width={50} height={16} className={cls.username} />
            <Skeleton width={50} height={16} className={cls.date} />
          </div>
          <Skeleton variant='title' className={cls.title} />
          {types}
          <Skeleton height={200} className={cls.img} />
          <Skeleton height={250} />
          <div className={cls.footer}>
            <Skeleton width={100} height={25} />
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames('', [className, cls[view]], {})}>
      <Card>
        <div className={cls.imgWrapper}>
          <Skeleton width={200} height={200} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Skeleton variant='title' />
      </Card>
    </div>
  );
};
