import { FC, memo } from 'react';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { ArticlesFiltersWidget } from '@/widgets/ArticlesFiltersWidget';

interface FilterContainerProps {
  className?: string;
}

export const FilterContainer: FC<FilterContainerProps> = memo((props) => {
  const { className } = props;

  const { onOrder, onSearch, onSort, onTabHandler, order, search, sort, tab } = useArticleFilters();

  return (
    <ArticlesFiltersWidget
      onOrder={onOrder}
      onSearch={onSearch}
      onSort={onSort}
      onTabHandler={onTabHandler}
      order={order}
      search={search}
      sort={sort}
      tab={tab}
      className={className}
    />
  );
});
