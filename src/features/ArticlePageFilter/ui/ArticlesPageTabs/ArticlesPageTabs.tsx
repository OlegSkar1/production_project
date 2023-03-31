import { FC, memo, useCallback } from 'react';

import { useSelector } from 'react-redux';

import cls from './ArticlesPageTabs.module.scss';

import { getTab } from '../../model/selectors/filterSelectors';

import { articlesFilterActions } from '../../model/slice/filterSlice';

import { ArticleType } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Tabs } from 'shared/ui';
import { TabItem } from 'shared/ui/Tabs';

interface ArticlesPageTabsProps {
  className?: string;
  onTabClick: (replace: boolean) => void;
}

const tabs: TabItem<ArticleType>[] = [
  {
    value: 'ALL',
    content: 'ALL',
  },
  {
    value: 'IT',
    content: 'IT',
  },
  {
    value: 'SCIENCE',
    content: 'SCIENCE',
  },
  {
    value: 'ECONOMICS',
    content: 'ECONOMICS',
  },
];

export const ArticlesPageTabs: FC<ArticlesPageTabsProps> = memo((props) => {
  const { className, onTabClick } = props;
  const dispatch = useAppDispatch();

  const tab = useSelector(getTab);

  const onTabHandler = useCallback(
    (tab: TabItem<string>) => {
      dispatch(articlesFilterActions.setTab(tab.value as ArticleType));
      onTabClick(true);
    },
    [dispatch, onTabClick]
  );

  return (
    <div className={classNames('', [className], {})}>
      <Tabs tabs={tabs} onTabClick={onTabHandler} key={tab} value={tab} />
    </div>
  );
});
