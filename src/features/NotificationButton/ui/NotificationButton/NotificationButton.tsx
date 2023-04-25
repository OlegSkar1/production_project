import { FC, memo, useCallback, useEffect, useState } from 'react';

import cls from './NotificationButton.module.scss';

import { NotificationsList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, Drawer, Icon, Popover } from 'shared/ui';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = memo((props) => {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer:coarse)').matches);
  }, []);

  const openDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button onClick={isMobile ? openDrawer : undefined}>
      <Icon Svg={NotificationIcon} />
    </Button>
  );

  return isMobile ? (
    <>
      {trigger}
      <Drawer isOpen={isOpen} onClose={closeDrawer} lazy>
        <NotificationsList />
      </Drawer>
    </>
  ) : (
    <Popover unmount={false} trigger={trigger} className={classNames('', [className], {})}>
      <NotificationsList className={cls.notifications} />
    </Popover>
  );
});
