import { Popover as HPopover } from '@headlessui/react';
import { FC, ReactNode, memo } from 'react';

import cls from './Popover.module.scss';

import { VStack } from '../../Stack/VStack/VStack';
import { mapDirectionClasses } from '../styles/consts';
import popupCls from '../styles/popup.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { DirectionType } from 'shared/types/ui';

interface PopoverProps {
  className?: string;
  children: ReactNode;
  trigger: ReactNode;
  direction?: DirectionType;
}

export const Popover: FC<PopoverProps> = memo((props) => {
  const { className, children, trigger, direction = 'bottom left' } = props;

  return (
    <HPopover className={classNames(popupCls.wrapper, [className], {})}>
      <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>

      <HPopover.Panel className={classNames(popupCls.items, [mapDirectionClasses[direction], cls.popover], {})}>
        <VStack gap='16' max className={cls.items}>
          {children}
        </VStack>
      </HPopover.Panel>
    </HPopover>
  );
});
