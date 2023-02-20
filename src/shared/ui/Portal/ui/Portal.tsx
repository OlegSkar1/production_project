import { ReactNode } from 'react';

import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal: React.FC<PortalProps> = (props) => {
  const root = document.querySelector('.app');

  const { children, element = root } = props;

  return createPortal(children, element);
};
