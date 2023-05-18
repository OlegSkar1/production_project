import { memo, useCallback } from 'react';

import { Button } from '../../Button/Button';
import { HStack } from '../../Stack/HStack/HStack';
import { TabItem } from '../model/types/tabs';

import cls from './Tabs.module.scss';

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabClick: (tab: TabItem<T>) => void;
}

const typedMemo: <T>(cb: T) => T = memo;

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
  const { className, tabs, value, onTabClick } = props;

  const onTabHandler = useCallback(
    (tab: TabItem<T>) => () => {
      onTabClick(tab as TabItem<T>);
    },
    [onTabClick]
  );

  return (
    <HStack gap='8' className={className}>
      {tabs.map((tab) => (
        <Button
          variant={tab.value === value ? 'backgroundInverted' : 'outlined'}
          className={cls.tab}
          key={tab.value}
          onClick={onTabHandler(tab)}
          data-testid={`Tab-${tab.value}`}
        >
          {tab.content}
        </Button>
      ))}
    </HStack>
  );
});
