import { RightOutlined } from '@ant-design/icons';
import { Listbox as HListbox } from '@headlessui/react';
import { FC, Fragment, ReactNode, memo } from 'react';

import cls from './ListBox.module.scss';

import { Button } from '../../Button/Button';

import { HStack } from '../../Stack/HStack/HStack';

import { mapDirectionClasses } from '../styles/consts';
import popupCls from '../styles/popup.module.scss';

import { classNames } from '@/shared/lib';
import { DirectionType } from '@/shared/types/ui';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: <T extends string>(value: T) => void;
  items: ListBoxItem[];
  label?: string;
  readonly?: boolean;
  direction?: DirectionType;
}

export const ListBox: FC<ListBoxProps> = memo((props) => {
  const { className, value, onChange, items, label, defaultValue, readonly, direction = 'bottom left' } = props;

  const optionsClasses = [cls.additional, mapDirectionClasses[direction]];

  return (
    <HStack gap='4'>
      {label && <label>{label}</label>}
      <HListbox
        as='div'
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        className={classNames(popupCls.wrapper, [className], {})}
        disabled={readonly}
      >
        <HListbox.Button as={'div'} className={classNames(popupCls.trigger, [], { [popupCls.disable]: readonly })}>
          <Button disabled={readonly} variant='backgroundInverted'>
            {value ?? defaultValue}
          </Button>
        </HListbox.Button>
        <HListbox.Options className={classNames(popupCls.items, optionsClasses, {})}>
          {items.map((item) => (
            <HListbox.Option as={Fragment} key={item.value} value={item.value} disabled={item.disabled}>
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, [], { [popupCls.active]: active, [popupCls.disable]: item.disabled })}
                >
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
});
