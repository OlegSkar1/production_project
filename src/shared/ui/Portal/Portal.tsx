import { ReactNode, useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

export const Portal: React.FC<PortalProps> = (props) => {
  const { children } = props;

  const [mounted, setMounted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    ref.current = document.querySelector('#root') || undefined;
    setMounted(true);
  }, []);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};
