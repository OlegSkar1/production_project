import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './Tabs.module.scss';

import { Button } from '../Button/Button';

import { classNames } from 'shared/lib/classNames/classNames';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: T;
  tabs: TabItem<T>[];
  value: T;
  onTabClick: (tab: T) => void;
}

const typedMemo: <T>(cb: T) => T = memo;

export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
  const { className, tabs, value, onTabClick } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.tabs, [className], {})}>
      {tabs.map((tab) => (
        <Button variant={tab.value === value ? 'backgroundInverted' : 'outlined'} className={cls.tab} key={tab.value}>
          {tab.content}
        </Button>
      ))}
    </div>
  );
});
