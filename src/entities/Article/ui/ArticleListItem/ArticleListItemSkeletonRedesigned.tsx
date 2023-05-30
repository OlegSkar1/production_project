import { FC } from 'react';

import { ArticleView } from '../../model/types/article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeletonRedesigned: FC<ArticleListItemSkeletonProps> = (props) => {
  const { className, view } = props;

  const types = <SkeletonRedesigned width={100} height={16} className={cls.types} />;
  const views = <SkeletonRedesigned width={50} height={16} />;

  if (view === ArticleView.LIST) {
    return (
      <CardRedesigned className={cls[view]}>
        <HStack className={cls.headerWrapper}>
          <SkeletonRedesigned variant='circle' width={30} height={30} />
          <SkeletonRedesigned width={50} height={16} className={cls.username} />
          <SkeletonRedesigned width={50} height={16} className={cls.date} />
        </HStack>
        <SkeletonRedesigned variant='title' className={cls.title} />
        {types}
        <SkeletonRedesigned height={200} className={cls.img} />
        <VStack gap='4'>
          <SkeletonRedesigned variant='text' />
          <SkeletonRedesigned variant='text' />
          <SkeletonRedesigned variant='text' />
          <SkeletonRedesigned variant='text' />
          <SkeletonRedesigned variant='text' />
          <SkeletonRedesigned variant='text' />
          <SkeletonRedesigned variant='text' />
        </VStack>

        <HStack justify='between' className={cls.footer}>
          <SkeletonRedesigned width={100} height={25} />
          {views}
        </HStack>
      </CardRedesigned>
    );
  }

  return (
    <div className={classNames('', [className, cls[view]], {})}>
      <CardRedesigned>
        <div className={cls.imgWrapper}>
          <SkeletonRedesigned height={200} />
        </div>
        <HStack justify='between' className={cls.infoWrapper}>
          {types}
          {views}
        </HStack>
        <SkeletonRedesigned variant='title' className={cls.title} />
      </CardRedesigned>
    </div>
  );
};
