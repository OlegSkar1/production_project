import { FC } from 'react';

import cls from './ArticleListItem.module.scss';

import { ArticleView } from '../../model/types/article';

import { classNames } from 'shared/lib/classNames/classNames';
import { Card, HStack, Skeleton, VStack } from 'shared/ui';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = (props) => {
  const { className, view } = props;

  const types = <Skeleton width={100} height={16} className={cls.types} />;
  const views = <Skeleton width={50} height={16} />;

  if (view === ArticleView.LIST) {
    return (
      <div className={classNames('', [className, cls[view]], {})}>
        <Card>
          <HStack className={cls.headerWrapper}>
            <Skeleton variant='circle' width={30} height={30} />
            <Skeleton width={50} height={16} className={cls.username} />
            <Skeleton width={50} height={16} className={cls.date} />
          </HStack>
          <Skeleton variant='title' className={cls.title} />
          {types}
          <Skeleton height={200} className={cls.img} />
          <VStack gap='4'>
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
          </VStack>

          <HStack justify='between' className={cls.footer}>
            <Skeleton width={100} height={25} />
            {views}
          </HStack>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames('', [className, cls[view]], {})}>
      <Card>
        <div className={cls.imgWrapper}>
          <Skeleton height={200} />
        </div>
        <HStack justify='between' className={cls.infoWrapper}>
          {types}
          {views}
        </HStack>
        <Skeleton variant='title' className={cls.title} />
      </Card>
    </div>
  );
};
