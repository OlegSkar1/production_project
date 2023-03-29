import { FC, memo, useCallback } from 'react';

import { useSelector } from 'react-redux';

import cls from './ArticlesPage.module.scss';

import {
  articlesListError,
  articlesListIsLoading,
  articlesListLimit,
  articlesListView,
} from '../../model/selectors/articlesList/articlesList';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initedFetchArticles } from '../../model/services/initedFetchArticles/initedFetchArticles/initedFetchArticles';
import {
  articleListSelectors,
  articlesListActions,
  articlesListReducer,
} from '../../model/slice/articlesListSlice/articlesListSlice';

import { ArticleList, ArticleView } from 'entities/Article';
import { ArticlesPageFilter } from 'features/ArticlePageFilter';
import { ArticleViewChanger } from 'features/ArticleViewChanger';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { useInitEffect } from 'shared/lib/hooks/useInitEffect';
import { Page } from 'widgets/Page';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesList: articlesListReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const articles = useSelector(articleListSelectors.selectAll);
  const isLoading = useSelector(articlesListIsLoading);
  const error = useSelector(articlesListError);
  const view = useSelector(articlesListView);

  useInitEffect(() => {
    dispatch(initedFetchArticles());
  });

  const onChangeView = useCallback(
    (newView: ArticleView) => {
      dispatch(articlesListActions.setView(newView));
    },
    [dispatch]
  );

  const onLoadNewArticles = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  const onChangeSort = useCallback(
    (replace: boolean) => {
      dispatch(articlesListActions.setPage(1));
      dispatch(fetchArticles({ replace }));
    },
    [dispatch]
  );

  const debouncedSort = useDebounce(onChangeSort, 500);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        isLoading={isLoading}
        onScrollEnd={onLoadNewArticles}
        className={classNames(cls.articlesPage, [className], {})}
      >
        <div className={cls.articlesHeaderWrapper}>
          <ArticlesPageFilter onChangeSort={debouncedSort} />
          <ArticleViewChanger onViewClick={onChangeView} view={view} />
        </div>

        <ArticleList articles={articles} isLoading={isLoading} view={view} error={error} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
