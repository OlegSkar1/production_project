import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { articlesFilterReducer } from '../../model/slice/filterSlice';

import { SortType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { OrderType } from '@/shared/types/sort';
import { Select } from '@/shared/ui';
import { OptionList } from '@/shared/ui/deprecated/Select';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

interface ArticlesPageSortProps {
  className?: string;
  sort: SortType;
  order: OrderType;
  onSort: (val: SortType) => void;
  onOrder: (val: OrderType) => void;
}

const reducers: ReducersList = {
  articlesFilter: articlesFilterReducer,
};

export const ArticlesPageSort: FC<ArticlesPageSortProps> = memo((props) => {
  const { className, sort, order, onSort, onOrder } = props;

  const { t } = useTranslation();

  const sortOptions = useMemo<OptionList<SortType>[]>(
    () => [
      {
        value: SortType.CREATED_AT,
        content: t('date'),
      },
      {
        value: SortType.TITLE,
        content: t('title'),
      },
      {
        value: SortType.VIEWS,
        content: t('views'),
      },
    ],
    [t]
  );

  const orderOptions = useMemo<OptionList<OrderType>[]>(
    () => [
      {
        value: 'asc',
        content: t('asc'),
      },
      {
        value: 'desc',
        content: t('desc'),
      },
    ],
    [t]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <ToggleFeature
        name='isAppRedesigned'
        off={
          <HStack data-testid='ArticlesPageSort' gap='32' className={classNames('', [className], {})}>
            <Select
              data-testid='ArticlesPageSort.sort'
              options={sortOptions}
              label={t('Sort by')}
              value={sort}
              onChange={onSort}
            />
            <Select
              data-testid='ArticlesPageSort.order'
              options={orderOptions}
              label={t('order by')}
              onChange={onOrder}
              value={order}
            />
          </HStack>
        }
        on={
          <VStack data-testid='ArticlesPageSort' gap='8' align='start' className={classNames('', [className], {})}>
            <ListBox
              size='s'
              data-testid='ArticlesPageSort.sort'
              items={sortOptions}
              label={t('Sort by')}
              value={sort}
              onChange={onSort}
            />
            <ListBox data-testid='ArticlesPageSort.order' items={orderOptions} onChange={onOrder} value={order} />
          </VStack>
        }
      />
    </DynamicModuleLoader>
  );
});
