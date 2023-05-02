import { memo, useCallback } from 'react';

import { Button } from '../../Button/Button';
import { HStack } from '../../Stack/HStack/HStack';
import { TabItem } from '../model/types/tabs';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Tabs.module.scss';

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabClick: (tab: TabItem<T>) => void;
}

const typedMemo: <T>(cb: T) => T = memo;

export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
  const { className, tabs, value, onTabClick } = props;

  const onTabHandler = useCallback(
    (tab: TabItem<T>) => () => {
      onTabClick(tab as TabItem<T>);
    },
    [onTabClick]
  );

  return (
    <HStack gap='8' className={classNames(cls.tabs, [className], {})}>
      {tabs.map((tab) => (
        <Button
          variant={tab.value === value ? 'backgroundInverted' : 'outlined'}
          className={cls.tab}
          key={tab.value}
          onClick={onTabHandler(tab)}
        >
          {tab.content}
        </Button>
      ))}
    </HStack>
  );
});
