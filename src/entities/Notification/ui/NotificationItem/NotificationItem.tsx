import { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import cls from './NotificationItem.module.scss';

import { NotificationType } from '../../model/types/notification';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, Card, Skeleton, Text } from '@/shared/ui';

interface NotificationItemProps {
  className?: string;
  item?: NotificationType;
  isLoading?: boolean;
  isError?: boolean;
}

export const NotificationItem: FC<NotificationItemProps> = memo((props) => {
  const { className, item, isLoading, isError } = props;

  const { t } = useTranslation();

  const content = (
    <Card variant='outlined' className={classNames(cls.notificationItem, [className], {})}>
      <Text title={item?.title} />
      <Text text={item?.description} />
    </Card>
  );

  if (isError) {
    return <Text text={t('error')} className={classNames(cls.notificationItem, [className], {})} />;
  }

  if (isLoading) {
    return (
      <Card variant='outlined' className={cls.notificationItem}>
        <Skeleton variant='title' className={cls.skeleton} />
        <Skeleton height={50} />
      </Card>
    );
  }
  if (item?.href) {
    return (
      <AppLink className={cls.notificationItem} to={item.href}>
        {content}
      </AppLink>
    );
  }

  return content;
});
