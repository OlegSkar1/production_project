import { Popover as HPopover } from '@headlessui/react';
import { FC, memo, ReactNode } from 'react';

import { mapDirectionClasses } from '../styles/consts';
import popupCls from '../styles/popup.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DirectionType } from '@/shared/types/ui';

import cls from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  children: ReactNode;
  trigger: ReactNode;
  direction?: DirectionType;
  unmount?: boolean;
}

export const Popover: FC<PopoverProps> = memo((props) => {
  const { className, children, trigger, direction = 'bottom left', unmount = true } = props;

  const popoverItems = [mapDirectionClasses[direction], popupCls.items, cls.popover];

  return (
    <HPopover className={classNames(popupCls.wrapper, [className], {})}>
      <HPopover.Button as='div' className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel unmount={unmount} className={classNames(cls.menu, popoverItems, {})}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
});
