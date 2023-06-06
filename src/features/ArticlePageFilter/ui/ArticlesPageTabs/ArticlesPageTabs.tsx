import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { articlesFilterReducer } from '../../model/slice/filterSlice';

import { ArticleType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { Tabs as TabsDeprecated, TabItem } from '@/shared/ui/deprecated/Tabs';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

interface ArticlesPageTabsProps {
  className?: string;
  tab: ArticleType;
  onTabHandler: (val: TabItem<string>) => void;
}

const reducers: ReducersList = {
  articlesFilter: articlesFilterReducer,
};

export const ArticlesPageTabs: FC<ArticlesPageTabsProps> = memo((props) => {
  const { className, tab, onTabHandler } = props;

  const { t } = useTranslation('articles');

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

  const content = (
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <div className={classNames('', [className], {})}>
          <TabsDeprecated tabs={tabs} onTabClick={onTabHandler} key={tab} value={tab} data-testid='ArticlesPageTabs' />
        </div>
      }
      on={
        <div className={classNames('', [className], {})}>
          <Tabs tabs={tabs} onTabClick={onTabHandler} key={tab} value={tab} data-testid='ArticlesPageTabs' />
        </div>
      }
    />
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
});
