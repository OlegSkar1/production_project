import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getOrder, getSort } from '../../model/selectors/filterSelectors';
import { articlesFilterActions, articlesFilterReducer } from '../../model/slice/filterSlice';

import { SortType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { OrderType } from '@/shared/types/sort';
import { HStack, Select } from '@/shared/ui';
import { OptionList } from '@/shared/ui/Select';

interface ArticlesPageSortProps {
  className?: string;
  onChangeSort: (replace: boolean) => void;
}

const reducers: ReducersList = {
  articlesFilter: articlesFilterReducer,
};

export const ArticlesPageSort: FC<ArticlesPageSortProps> = memo((props) => {
  const { className, onChangeSort } = props;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const sort = useSelector(getSort);
  const order = useSelector(getOrder);

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
  const onSort = useCallback(
    (val: SortType) => {
      dispatch(articlesFilterActions.setSort(val));
      onChangeSort(true);
    },
    [dispatch, onChangeSort]
  );

  const onOrder = useCallback(
    (val: OrderType) => {
      dispatch(articlesFilterActions.setOrder(val));
      onChangeSort(true);
    },
    [dispatch, onChangeSort]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
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
    </DynamicModuleLoader>
  );
});
