import { FC, memo } from 'react';

import { useFetchNotificationsQuery } from '../../api/notificationApi';

import { NotificationItem } from '../NotificationItem/NotificationItem';

import { VStack } from '@/shared/ui';

interface NotificationsListProps {
  className?: string;
}

export const NotificationsList: FC<NotificationsListProps> = memo((props) => {
  const { className } = props;

  const { data: items, isLoading, isError } = useFetchNotificationsQuery(null);

  if (isLoading || isError) {
    return (
      <VStack gap='16' max className={className}>
        <NotificationItem isLoading={isLoading} isError={isError} />
        <NotificationItem isLoading={isLoading} isError={isError} />
        <NotificationItem isLoading={isLoading} isError={isError} />
      </VStack>
    );
  }

  return (
    <VStack gap='16' max className={className}>
      {items?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  );
});
