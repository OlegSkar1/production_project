import { FC, memo, useCallback, useMemo } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

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

export const ArticlesPageTabs: FC<ArticlesPageTabsProps> = memo((props) => {
  const { className, onTabClick } = props;

  const dispatch = useAppDispatch();

  const { t } = useTranslation('articles');

  const tab = useSelector(getTab);

  const tabs: TabItem<ArticleType>[] = useMemo(
    () => [
      {
        value: 'ALL',
        content: t('all'),
      },
      {
        value: 'IT',
        content: t('it'),
      },
      {
        value: 'SCIENCE',
        content: t('science'),
      },
      {
        value: 'ECONOMICS',
        content: t('economics'),
      },
    ],
    [t]
  );

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
