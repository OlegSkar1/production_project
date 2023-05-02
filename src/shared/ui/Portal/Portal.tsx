import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal: React.FC<PortalProps> = (props) => {
  const { children, element = document.querySelector('#root') } = props;

  return createPortal(children, element as HTMLElement);
};
