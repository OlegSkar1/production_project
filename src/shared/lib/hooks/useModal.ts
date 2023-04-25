import { useCallback, useEffect, useState } from 'react';

import { useMobile } from './useMobile';

interface useModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const useModal = ({ isOpen, onClose }: useModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMobile();

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
      setIsMounted(true);
      !isMobile && window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      setIsClosing(false);
      !isMobile && window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobile, isOpen, onKeyDown]);

  return { isClosing, isMounted, onCloseHandler };
};
