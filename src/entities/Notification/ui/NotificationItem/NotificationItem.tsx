import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { NotificationType } from '../../model/types/notification';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './NotificationItem.module.scss';

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
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <CardDeprecated variant='outlined' className={classNames(cls.notificationItem, [className], {})}>
          <TextDeprecated title={item?.title} />
          <TextDeprecated text={item?.description} />
        </CardDeprecated>
      }
      on={
        <Card padding='0' className={classNames(cls.notificationItemRedesigned, [className], {})}>
          <Text title={item?.title} text={item?.description} />
        </Card>
      }
    />
  );

  if (isError) {
    return (
      <ToggleFeature
        name='isAppRedesigned'
        off={<TextDeprecated text={t('error')} className={classNames(cls.notificationItem, [className], {})} />}
        on={<Text text={t('error')} className={classNames(cls.notificationItem, [className], {})} />}
      />
    );
  }

  if (isLoading) {
    return (
      <ToggleFeature
        name='isAppRedesigned'
        off={
          <CardDeprecated variant='outlined' className={cls.notificationItem}>
            <SkeletonDeprecated variant='title' className={cls.skeleton} />
            <SkeletonDeprecated height={50} />
          </CardDeprecated>
        }
        on={
          <Card variant='outlined' className={cls.notificationItem}>
            <SkeletonDeprecated variant='title' className={cls.skeleton} />
            <SkeletonDeprecated height={50} />
          </Card>
        }
      />
    );
  }
  if (item?.href) {
    return (
      <ToggleFeature
        name='isAppRedesigned'
        off={
          <AppLinkDeprecated className={cls.notificationItem} to={item.href}>
            {content}
          </AppLinkDeprecated>
        }
        on={
          <AppLink className={cls.notificationItem} to={item.href}>
            {content}
          </AppLink>
        }
      />
    );
  }

  return content;
});
