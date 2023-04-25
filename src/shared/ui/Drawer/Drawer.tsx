import { ReactNode } from 'react';

import cls from './Drawer.module.scss';

import { useModal } from '../../lib/hooks/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';

interface DrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Drawer: React.FC<DrawerProps> = (props) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const { theme } = useTheme();

  const { isClosing, isMounted, onCloseHandler } = useModal({ isOpen, onClose });

  const mods: Record<string, boolean | undefined> = {
    [cls.opened]: isOpen,
    [cls.closed]: isClosing,
  };

  if (!isMounted && lazy) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(cls.drawer, [className, theme, 'app_drawer'], mods)}
        onAnimationEnd={isClosing ? onClose : undefined}
      >
        <Overlay onClick={onCloseHandler} />
        <div className={cls.contentWrapper}>
          <div className={cls.content}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};
