import { a, config, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { ReactNode, useCallback, useEffect } from 'react';

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

const height = window.innerHeight - 100;

export const Drawer: React.FC<DrawerProps> = (props) => {
  const { className, children, isOpen, onClose } = props;

  const { theme } = useTheme();

  const [{ y }, api] = useSpring(() => ({ y: height }));

  const openDrawer = useCallback(() => {
    api.start({
      y: 0,
      immediate: false,
    });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      config: { ...config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = useDrag(
    ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
      if (my < -70) cancel();

      if (last) {
        my > height * 0.5 || (vy > 0.5 && dy > 0) ? close(vy) : openDrawer();
      } else api.start({ y: my, immediate: true });
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  return (
    <Portal>
      <div className={classNames(cls.drawer, [className, theme, 'app_drawer'], {})}>
        <Overlay onClick={close} />
        <a.div className={cls.sheet} style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }} {...bind()}>
          {children}
        </a.div>
      </div>
    </Portal>
  );
};
