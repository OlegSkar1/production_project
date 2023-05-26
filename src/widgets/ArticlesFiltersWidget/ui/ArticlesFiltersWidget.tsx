import { FC, memo } from 'react';

import { ArticleType, SortType } from '@/entities/Article';
import { ArticlesPageSearch, ArticlesPageSort, ArticlesPageTabs } from '@/features/ArticlePageFilter';
import { classNames } from '@/shared/lib';
import { OrderType } from '@/shared/types/sort';
import { TabItem } from '@/shared/ui/deprecated/Tabs';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticlesFiltersWidget.module.scss';

interface ArticlesFiltersWidgetProps {
  className?: string;
  onTabHandler: (val: TabItem<string>) => void;
  onSort: (val: SortType) => void;
  onOrder: (val: OrderType) => void;
  onSearch: (val: string) => void;
  sort: SortType;
  order: OrderType;
  tab: ArticleType;
  search: string;
}

export const ArticlesFiltersWidget: FC<ArticlesFiltersWidgetProps> = memo((props) => {
  const { className, sort, order, tab, search, onTabHandler, onSort, onOrder, onSearch } = props;

  return (
    <Card>
      <VStack gap='32' align='start' className={classNames(cls.articleFiltersWidget, [className], {})}>
        <ArticlesPageSearch search={search} onSearch={onSearch} />
        <ArticlesPageTabs tab={tab} onTabHandler={onTabHandler} />
        <ArticlesPageSort sort={sort} order={order} onSort={onSort} onOrder={onOrder} />
      </VStack>
    </Card>
  );
});
