import { FC } from 'react';

import { ArticleView } from '../../model/types/article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeletonDeprecated: FC<ArticleListItemSkeletonProps> = (props) => {
  const { className, view } = props;

  const types = <SkeletonDeprecated width={100} height={16} className={cls.types} />;
  const views = <SkeletonDeprecated width={50} height={16} />;

  if (view === ArticleView.LIST) {
    return (
      <CardDeprecated className={cls[view]}>
        <HStack className={cls.headerWrapper}>
          <SkeletonDeprecated variant='circle' width={30} height={30} />
          <SkeletonDeprecated width={50} height={16} className={cls.username} />
          <SkeletonDeprecated width={50} height={16} className={cls.date} />
        </HStack>
        <SkeletonDeprecated variant='title' className={cls.title} />
        {types}
        <SkeletonDeprecated height={200} className={cls.img} />
        <VStack gap='4'>
          <SkeletonDeprecated variant='text' />
          <SkeletonDeprecated variant='text' />
          <SkeletonDeprecated variant='text' />
          <SkeletonDeprecated variant='text' />
          <SkeletonDeprecated variant='text' />
          <SkeletonDeprecated variant='text' />
          <SkeletonDeprecated variant='text' />
        </VStack>

        <HStack justify='between' className={cls.footer}>
          <SkeletonDeprecated width={100} height={25} />
          {views}
        </HStack>
      </CardDeprecated>
    );
  }

  return (
    <div className={classNames('', [className, cls[view]], {})}>
      <CardDeprecated>
        <div className={cls.imgWrapper}>
          <SkeletonDeprecated height={200} />
        </div>
        <HStack justify='between' className={cls.infoWrapper}>
          {types}
          {views}
        </HStack>
        <SkeletonDeprecated variant='title' className={cls.title} />
      </CardDeprecated>
    </div>
  );
};
