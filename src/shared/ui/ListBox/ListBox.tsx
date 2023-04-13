import { RightOutlined } from '@ant-design/icons';
import { Listbox as HListbox } from '@headlessui/react';
import { FC, Fragment, ReactNode } from 'react';

import cls from './ListBox.module.scss';

import { Button } from '../Button/Button';

import { HStack } from '../Stack/HStack/HStack';

import { classNames } from 'shared/lib';

export interface ListBoxItems {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DirectionType = 'top' | 'bottom';

interface ListBoxProps {
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: <T extends string>(value: T) => void;
  items: ListBoxItems[];
  label?: string;
  readonly?: boolean;
  direction?: DirectionType;
}

export const ListBox: FC<ListBoxProps> = (props) => {
  const { className, value, onChange, items, label, defaultValue, readonly, direction = 'bottom' } = props;

  return (
    <HStack gap='4'>
      {label && <label>{label}</label>}
      <HListbox
        as='div'
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        className={classNames(cls.listBox, [className], {})}
        disabled={readonly}
      >
        <HListbox.Button className={classNames(cls.trigger, [], { [cls.disable]: readonly })}>
          <Button disabled={readonly} variant='backgroundInverted'>
            {value ?? defaultValue}
          </Button>
        </HListbox.Button>
        <HListbox.Options className={classNames(cls.options, [cls[direction]], {})}>
          {items.map((item) => (
            <HListbox.Option as={Fragment} key={item.value} value={item.value} disabled={item.disabled}>
              {({ active, selected }) => (
                <li className={classNames(cls.item, [], { [cls.active]: active, [cls.disable]: item.disabled })}>
                  <HStack gap='4' max justify='center'>
                    {selected && <RightOutlined />}
                    {item.content}
                  </HStack>
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
};
