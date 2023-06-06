import { memo } from 'react';

import { MainLayout } from '../MainLayout/MainLayout';

import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './AppLoaderLayout.module.scss';

export const AppLoaderLayout = memo(() => {
  return (
    <MainLayout
      header={
        <HStack className={cls.header}>
          <Skeleton width={40} height={40} variant='circle' />
        </HStack>
      }
      content={
        <VStack gap='16' align='start' className={cls.content}>
          <Skeleton width='70%' height={32} borderRadius={16} />
          <Skeleton width='40%' height={20} borderRadius={16} />
          <Skeleton width='50%' height={20} borderRadius={16} />
          <Skeleton width='30%' height={32} borderRadius={16} />
          <Skeleton width='80%' height='40%' borderRadius={16} />
          <Skeleton width='80%' height='40%' borderRadius={16} />
        </VStack>
      }
      sidebar={<Skeleton borderRadius={32} width={220} height='100%' />}
    />
  );
});
