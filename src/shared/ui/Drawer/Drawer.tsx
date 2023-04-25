import { ReactNode, useCallback, useEffect, useState } from 'react';

import cls from './Drawer.module.scss';

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
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const { theme } = useTheme();

  const mods: Record<string, boolean | undefined> = {
    [cls.opened]: isOpen,
    [cls.closed]: isClosing,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }

    return () => {
      setIsClosing(false);
    };
  }, [isOpen]);

  const onCloseHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
    }
  }, [onClose]);

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
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
