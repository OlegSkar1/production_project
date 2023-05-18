import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Portal: React.FC<PortalProps> = (props) => {
  const { children, element = document.querySelector('#root') } = props;

  return createPortal(children, element as HTMLElement);
};
