import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './Tabs.module.scss';

import { Card } from '../Card/Card';

import { classNames } from 'shared/lib/classNames/classNames';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (value: string) => void;
}

export const Tabs: FC<TabsProps> = (props) => {
  const { className, tabs, value, onTabClick } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.tabs, [className], {})}>
      {tabs.map((tab) => (
        <Card variant={tab.value === value ? 'normal' : 'outlined'} className={cls.tab} key={tab.value}>
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
