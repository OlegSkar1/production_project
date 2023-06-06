import { FC, memo } from 'react';

import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

interface ProfileCardSkeletonProps {
  className?: string;
}

export const ProfileCardSkeleton: FC<ProfileCardSkeletonProps> = memo((props) => {
  const { className } = props;

  return (
    <HStack gap='24' justify='center' max className={className}>
      <VStack gap='16' align='start' max>
        <Skeleton borderRadius={48} height={32} />
        <Skeleton borderRadius={48} height={32} />
        <Skeleton borderRadius={48} height={32} />
        <Skeleton borderRadius={48} height={32} />
      </VStack>
      <VStack gap='16' align='start' max>
        <Skeleton borderRadius={48} height={32} />
        <Skeleton borderRadius={48} height={32} />
        <Skeleton borderRadius={48} height={32} />
        <Skeleton borderRadius={48} height={32} />
      </VStack>
    </HStack>
  );
});
