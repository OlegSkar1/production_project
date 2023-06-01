import { ReactNode } from 'react';

import { Overlay } from '../Overlay';
import { Portal } from '../Portal/Portal';

import { classNames } from '@/shared/lib';
import { toggleFeature } from '@/shared/lib/featureFlags';
import { useModal } from '@/shared/lib/hooks/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme';

import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const { isClosing, isMounted, onCloseHandler } = useModal({ isOpen, onClose });

  const { theme } = useTheme();

  const mods: Record<string, boolean | undefined> = {
    [cls.opened]: isOpen,
    [cls.closed]: isClosing,
  };

  if (!isMounted && lazy) {
    return null;
  }

  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      <div
        className={classNames(
          cls.modal,
          [
            className,
            theme,
            'app_modal',
            toggleFeature({
              name: 'isAppRedesigned',
              off: () => cls.modalOld,
              on: () => cls.modalNew,
            }),
          ],
          mods
        )}
        onAnimationEnd={isClosing ? onClose : undefined}
      >
        <Overlay onClick={onCloseHandler} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
