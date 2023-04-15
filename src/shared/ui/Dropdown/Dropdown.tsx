import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import cls from './Dropdown.module.scss';

import { AppLink } from '../AppLink/AppLink';

import { classNames } from 'shared/lib';
import { DirectionType } from 'shared/types/ui';

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

const mapDirectionClasses: Record<DirectionType, string> = {
  'top left': cls.directionTopLeft,
  'top right': cls.directionTopRight,
  'bottom left': cls.directionBottomLeft,
  'bottom right': cls.directionBottomRight,
};

export function Dropdown(props: DropdownProps) {
  const { items, trigger, className, direction = 'bottom right' } = props;

  const itemsClasses = [mapDirectionClasses[direction]];

  return (
    <Menu as='div' className={classNames(cls.dropdown, [className], {})}>
      <Menu.Button className={cls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.items, itemsClasses, {})}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(cls.item, [], { [cls.active]: active, [cls.disable]: item.disabled })}
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
}
