import { ReactNode, useCallback, useEffect, useState } from 'react';

import cls from './Modal.module.scss';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal: React.FC<ModalProps> = (props) => {
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
  }, [isOpen]);

  const onCloseHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseHandler();
      }
    },
    [onCloseHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      setIsClosing(false);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (!isMounted && lazy) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(cls.modal, [className, theme, 'app_modal'], mods)}
        onAnimationEnd={isClosing ? onClose : undefined}
      >
        <Overlay onClick={onCloseHandler} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
