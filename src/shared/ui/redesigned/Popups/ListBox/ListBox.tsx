import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode, memo, useMemo } from 'react';

import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { VStack } from '../../Stack';
import { FlexAlign, FlexGap, FlexJustify } from '../../Stack/Flex/Flex';
import { HStack } from '../../Stack/HStack/HStack';
import { Text } from '../../Text';
import { mapDirectionClasses } from '../styles/consts';
import popupCls from '../styles/popup.module.scss';

import DownArrow from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib';
import { DirectionType } from '@/shared/types/ui';

import cls from './ListBox.module.scss';

export interface ListBoxItem<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

export type LabelDirection = 'row' | 'column';

export type SizeListbox = 's' | 'm' | 'l';

interface ListBoxProps<T extends string> {
  className?: string;
  value?: T;
  defaultValue?: string;
  onChange: (value: T) => void;
  items: ListBoxItem<T>[];
  label?: string;
  readonly?: boolean;
  direction?: DirectionType;
  labelDirection?: LabelDirection;
  labelGap?: FlexGap;
  labelAlign?: FlexAlign;
  labelJustify?: FlexJustify;
  size?: SizeListbox;
}

const typedMemo: <T>(cb: T) => T = memo;

export const ListBox = typedMemo(<T extends string>(props: ListBoxProps<T>) => {
  const {
    className,
    value,
    onChange,
    items,
    label,
    defaultValue,
    readonly,
    direction = 'bottom left',
    labelDirection = 'column',
    labelGap = '8',
    labelAlign = 'start',
    labelJustify = 'center',
    size = 'm',
  } = props;

  const optionsClasses = [mapDirectionClasses[direction], popupCls.items];

  const selectedValue = useMemo(() => {
    return items.find((item) => item.value === value);
  }, [items, value]);

  const listbox = (
    <HListbox
      as='div'
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      className={classNames(popupCls.wrapper, [className], {})}
      disabled={readonly}
    >
      <HListbox.Button as={'div'} className={classNames(popupCls.trigger, [], { [popupCls.disable]: readonly })}>
        <Button
          size={size}
          disabled={readonly}
          variant='light'
          addonRight={<Icon Svg={DownArrow} className={cls.arrow} />}
        >
          <span>{selectedValue?.content ?? defaultValue}</span>
        </Button>
      </HListbox.Button>
      <HListbox.Options className={classNames(cls.menu, optionsClasses, {})}>
        {items.map((item) => (
          <HListbox.Option as={Fragment} key={item.value} value={item.value} disabled={item.disabled}>
            {({ active, selected }) => (
              <li
                className={classNames(cls.item, [], {
                  [popupCls.active]: active,
                  [popupCls.disable]: item.disabled,
                })}
              >
                <HStack gap='8'>
                  <span>{item.content}</span>
                  {selected && <Icon Svg={DownArrow} className={cls.arrowLeft} />}
                </HStack>
              </li>
            )}
          </HListbox.Option>
        ))}
      </HListbox.Options>
    </HListbox>
  );

  if (label && labelDirection === 'column') {
    return (
      <VStack gap={labelGap} align={labelAlign}>
        <Text text={label} />
        {listbox}
      </VStack>
    );
  }
  if (label && labelDirection === 'row') {
    return (
      <HStack gap={labelGap} justify={labelJustify}>
        <Text text={label} />
        {listbox}
      </HStack>
    );
  }

  return listbox;
});
