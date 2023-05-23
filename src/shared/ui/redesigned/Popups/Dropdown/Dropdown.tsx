import { Menu } from '@headlessui/react';
import { FC, Fragment, ReactNode, memo } from 'react';

import { AppLink } from '../../AppLink/AppLink';
import { mapDirectionClasses } from '../styles/consts';
import popupCls from '../styles/popup.module.scss';

import { classNames } from '@/shared/lib';
import { DirectionType } from '@/shared/types/ui';

import cls from './Dropdown.module.scss';

interface DropdownItem {
  content: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DirectionType;
}

export const Dropdown: FC<DropdownProps> = memo((props) => {
  const { items, trigger, className, direction = 'bottom right' } = props;

  const itemsClasses = [cls.additional, mapDirectionClasses[direction]];

  return (
    <Menu as='div' className={classNames(popupCls.wrapper, [className], {})}>
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(popupCls.items, itemsClasses, {})}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(cls.item, [], { [popupCls.active]: active, [popupCls.disable]: item.disabled })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item refName='href' as={AppLink} to={item.href} key={item.content} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} key={item.content} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
});
