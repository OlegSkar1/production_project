import { FC, memo } from 'react';

import cls from './NotificationButton.module.scss';

import { NotificationsList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, Icon, Popover } from 'shared/ui';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = memo((props) => {
  const { className } = props;

  return (
    <Popover
      unmount={false}
      trigger={
        <Button>
          <Icon Svg={NotificationIcon} />
        </Button>
      }
      className={classNames('', [className], {})}
    >
      <NotificationsList className={cls.notifications} />
    </Popover>
  );
});
