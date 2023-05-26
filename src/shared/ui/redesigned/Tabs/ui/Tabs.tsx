import { memo, useCallback } from 'react';

import { VStack } from '../../../redesigned/Stack';
import { Button } from '../../Button';
import { TabItem } from '../model/types/tabs';

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
    <VStack gap='8' className={className} align='start'>
      {tabs.map((tab) => (
        <Button
          variant={tab.value === value ? 'light' : 'filled'}
          key={tab.value}
          onClick={onTabHandler(tab)}
          data-testid={`Tab-${tab.value}`}
        >
          {tab.content}
        </Button>
      ))}
    </VStack>
  );
});
