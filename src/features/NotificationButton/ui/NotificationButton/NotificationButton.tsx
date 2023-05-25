import { FC, memo, useCallback, useState } from 'react';

import { NotificationsList } from '@/entities/Notification';
import NotificationIconDeprecated from '@/shared/assets/icons/notification.svg';
import NotificationIcon from '@/shared/assets/icons/notificationNew.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { useMobile } from '@/shared/lib/hooks/useMobile';
import { Drawer, Icon, Popover } from '@/shared/ui';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups/Popover';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = memo((props) => {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMobile();

  const openDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <ButtonDeprecated onClick={isMobile ? openDrawer : undefined}>
          <IconDeprecated Svg={NotificationIconDeprecated} width={20} height={20} />
        </ButtonDeprecated>
      }
      on={<Icon Svg={NotificationIcon} clickable onClick={isMobile ? openDrawer : () => false} />}
    />
  );

  return isMobile ? (
    <>
      {trigger}
      <Drawer isOpen={isOpen} onClose={closeDrawer} lazy>
        <NotificationsList />
      </Drawer>
    </>
  ) : (
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <PopoverDeprecated unmount={false} trigger={trigger} className={classNames('', [className], {})}>
          <NotificationsList className={cls.notifications} />
        </PopoverDeprecated>
      }
      on={
        <Popover unmount={false} trigger={trigger} className={classNames('', [className], {})}>
          <NotificationsList className={cls.notificationsRedesigned} />
        </Popover>
      }
    />
  );
});
