import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import cls from './Modal.module.scss';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { Portal } from 'shared/ui/Portal/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose } = props;
  const [isClosing, setIsClosing] = useState(false);
  const timeoutRef = useRef(null);

  const { theme } = useTheme();

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.closed]: isClosing,
  };

  const onCloseHandler = useCallback(() => {
    setIsClosing(true);

    timeoutRef.current = setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 200);
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
      window.removeEventListener('keydown', onKeyDown);
      clearTimeout(timeoutRef.current);
    };
  }, [isOpen, onKeyDown]);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, [className, theme, 'app_modal'], mods)} onClick={onCloseHandler}>
        <div className={cls.overlay}>
          <div className={classNames(cls.content, [className], {})} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
