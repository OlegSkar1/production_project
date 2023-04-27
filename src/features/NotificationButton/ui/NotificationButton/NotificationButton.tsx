import { FC, memo, useCallback, useState } from 'react';

import cls from './NotificationButton.module.scss';

import { NotificationsList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';
import { useMobile } from 'shared/lib/hooks/useMobile';
import { Button, Drawer, Icon, Popover } from 'shared/ui';

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
    <Button onClick={isMobile ? openDrawer : undefined}>
      <Icon Svg={NotificationIcon} />
    </Button>
  );

  return isMobile ? (
    <>
      {trigger}
      <AnimationProvider>
        <Drawer isOpen={isOpen} onClose={closeDrawer} lazy>
          <NotificationsList />
        </Drawer>
      </AnimationProvider>
    </>
  ) : (
    <Popover unmount={false} trigger={trigger} className={classNames('', [className], {})}>
      <NotificationsList className={cls.notifications} />
    </Popover>
  );
});
