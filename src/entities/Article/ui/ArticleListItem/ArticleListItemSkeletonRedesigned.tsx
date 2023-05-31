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
        <SkeletonRedesigned height={420} borderRadius={16} className={cls.skeletonImg} />
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
    <CardRedesigned padding='0' className={classNames(cls.skeletonWrapper, [className, cls[view]], {})}>
      <SkeletonRedesigned height={141} className={cls.imgWrapperRedesigned} />
      <VStack gap='8' max align='start' className={cls.infoWrapperRedesigned}>
        <SkeletonRedesigned variant='text' width='90%' height={22} />
        <SkeletonRedesigned variant='text' width='70%' height={22} />
        <SkeletonRedesigned variant='text' width='80%' height={22} />
        <SkeletonRedesigned variant='text' />
        <VStack gap='8' max className={cls.footerRedesigned}>
          <HStack gap='4' justify='between' max>
            <SkeletonRedesigned variant='text' width='40%' />
            <SkeletonRedesigned variant='text' width='30%' />
          </HStack>
          <HStack gap='4' max>
            <SkeletonRedesigned variant='circle' height={32} width={32} className={cls.title} />
            <SkeletonRedesigned variant='text' width={'40%'} className={cls.title} />
          </HStack>
        </VStack>
      </VStack>
    </CardRedesigned>
  );
};
