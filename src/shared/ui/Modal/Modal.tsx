import { ReactNode, useCallback, useEffect, useState } from 'react';

import cls from './Modal.module.scss';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { Portal } from 'shared/ui/Portal/Portal';

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

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

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
        onClick={onCloseHandler}
        onAnimationEnd={isClosing ? onClose : undefined}
      >
        <div className={cls.overlay}>
          <div className={classNames(cls.content, [className], {})} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
