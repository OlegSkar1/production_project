import { FC, memo, useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useSearchParams } from 'react-router-dom';

import cls from './ArticlesPage.module.scss';

import {
  articlesListError,
  articlesListIsLoading,
  articlesListView,
} from '../../model/selectors/articlesList/articlesList';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initedFetchArticles } from '../../model/services/initedFetchArticles/initedFetchArticles';
import {
  articleListSelectors,
  articlesListActions,
  articlesListReducer,
} from '../../model/slice/articlesListSlice/articlesListSlice';

import { ArticleList, ArticleView } from 'entities/Article';
import {
  ArticlesPageSort,
  ArticlesPageSearch,
  getOrder,
  getSearch,
  getSort,
  ArticlesPageTabs,
  getTab,
} from 'features/ArticlePageFilter';
import { ArticleViewChanger } from 'features/ArticleViewChanger';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
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

  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  const articles = useSelector(articleListSelectors.selectAll);
  const isLoading = useSelector(articlesListIsLoading);
  const error = useSelector(articlesListError);
  const view = useSelector(articlesListView);

  const sort = useSelector(getSort);
  const order = useSelector(getOrder);
  const search = useSelector(getSearch);
  const tab = useSelector(getTab);

  useEffect(() => {
    setSearchParams({ sort, order, search, type: tab });
  }, [tab, sort, order, search, setSearchParams]);

  useInitEffect(() => {
    dispatch(initedFetchArticles(searchParams));
  });

  const onChangeView = useCallback(
    (newView: ArticleView) => {
      dispatch(articlesListActions.setView(newView));
    },
    [dispatch]
  );

  const onLoadNewArticles = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      if (error) {
        return false;
      }
      dispatch(fetchNextArticlesPage());
    }
  }, [dispatch, error]);

  const onChangeSort = useCallback(
    (replace: boolean) => {
      if (__PROJECT__ !== 'storybook') {
        dispatch(articlesListActions.setPage(1));
        dispatch(fetchArticles({ replace }));
      }
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        isLoading={isLoading}
        onScrollEnd={onLoadNewArticles}
        className={classNames(cls.articlesPage, [className], {})}
      >
        <div className={cls.articlesHeaderWrapper}>
          <ArticlesPageSort onChangeSort={onChangeSort} />
          <ArticleViewChanger onViewClick={onChangeView} view={view} />
        </div>
        <ArticlesPageSearch onChangeSort={onChangeSort} className={cls.search} />
        <ArticlesPageTabs onTabClick={onChangeSort} className={cls.tabs} />
        <ArticleList articles={articles} isLoading={isLoading} view={view} error={error} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
