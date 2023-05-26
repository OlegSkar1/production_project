import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
  articlesListIsLoading,
  articlesListError,
  articlesListView,
} from '../../model/selectors/articlesList/articlesList';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { articlesListActions } from '../../model/slice/articlesListSlice/articlesListSlice';

import { ArticleView } from '@/entities/Article';
import { getSort, getOrder, getSearch, getTab } from '@/features/ArticlePageFilter';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

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

  return {
    isLoading,
    error,
    sort,
    order,
    search,
    tab,
    view,
    onChangeView,
    onChangeSort,
  };
}
