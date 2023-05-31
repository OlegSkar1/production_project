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
      <CardRedesigned className={classNames(cls[view], [cls.skeletonWrapper], {})}>
        <HStack className={cls.headerWrapper}>
          <SkeletonRedesigned variant='circle' width={32} height={32} />
          <SkeletonRedesigned width='20%' height={24} borderRadius={32} className={cls.username} />
        </HStack>
        <VStack gap='8' className={cls.titleRedesigned} align='start'>
          <SkeletonRedesigned variant='title' width='100%' />
          <SkeletonRedesigned variant='title' width='85%' />
        </VStack>
        <SkeletonRedesigned width='73%' height={27} borderRadius={8} className={cls.titleRedesigned} />
        <SkeletonRedesigned height={250} borderRadius={16} className={cls.skeletonImg} />
        <VStack align='start' className={cls.skeletonContent}>
          <SkeletonRedesigned variant='text' width='85%' className={cls.text} />
          <SkeletonRedesigned variant='text' width='80%' className={cls.text} />
          <SkeletonRedesigned variant='text' width='90%' />
        </VStack>
        <SkeletonRedesigned width={56} height={23} borderRadius={22} className={cls.skeletonFooter} />
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
