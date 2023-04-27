import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import { getSearch } from '../../model/selectors/filterSelectors';
import { articlesFilterActions, articlesFilterReducer } from '../../model/slice/filterSlice';

import { classNames } from '@/shared/lib';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { Card, Input } from '@/shared/ui';

interface ArticlesPageSearchProps {
  className?: string;
  onChangeSort: (replace: boolean) => void;
}

const reducers: ReducersList = {
  articlesFilter: articlesFilterReducer,
};

export const ArticlesPageSearch: FC<ArticlesPageSearchProps> = (props) => {
  const { className, onChangeSort } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const search = useSelector(getSearch);

  const debouncedSort = useDebounce(onChangeSort, 500);

  const onSearch = useCallback(
    (val: string) => {
      dispatch(articlesFilterActions.setSearch(val));
      debouncedSort(true);
    },
    [debouncedSort, dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Card className={classNames('', [className], {})}>
        <Input label={t('search')} value={search} onChange={onSearch} variant='outlined' />
      </Card>
    </DynamicModuleLoader>
  );
};
