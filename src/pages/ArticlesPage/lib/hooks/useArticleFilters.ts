import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
  articlesListIsLoading,
  articlesListError,
  articlesListView,
} from '../../model/selectors/articlesList/articlesList';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { articlesListActions } from '../../model/slice/articlesListSlice/articlesListSlice';

import { ArticleType, ArticleView, SortType } from '@/entities/Article';
import { getSort, getOrder, getSearch, getTab, articlesFilterActions } from '@/features/ArticlePageFilter';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { OrderType } from '@/shared/types/sort';
import { TabItem } from '@/shared/ui/deprecated/Tabs';

export function useArticleFilters() {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(articlesListIsLoading);
  const error = useSelector(articlesListError);

  const sort = useSelector(getSort);
  const order = useSelector(getOrder);
  const search = useSelector(getSearch);
  const tab = useSelector(getTab);

  const view = useSelector(articlesListView);

  const onChangeView = useCallback(
    (newView: ArticleView) => {
      dispatch(articlesListActions.setView(newView));
    },
    [dispatch]
  );
  const onChangeSort = useCallback(
    (replace: boolean) => {
      if (__PROJECT__ !== 'storybook') {
        dispatch(articlesListActions.setPage(1));
        dispatch(fetchArticles({ replace }));
      }
    },
    [dispatch]
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

  const onTabHandler = useCallback(
    (tab: TabItem<string>) => {
      dispatch(articlesFilterActions.setTab(tab.value as ArticleType));
      onChangeSort(true);
    },
    [dispatch, onChangeSort]
  );

  const debouncedSort = useDebounce(onChangeSort, 500);

  const onSearch = useCallback(
    (val: string) => {
      dispatch(articlesFilterActions.setSearch(val));
      debouncedSort(true);
    },
    [debouncedSort, dispatch]
  );

  return {
    isLoading,
    error,
    sort,
    order,
    search,
    tab,
    view,
    onChangeView,
    onSort,
    onOrder,
    onTabHandler,
    onSearch,
  };
}
