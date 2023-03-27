import { FC, memo, useCallback } from 'react';

import { useSelector } from 'react-redux';

import cls from './ArticlesPage.module.scss';

import {
  articlesListError,
  articlesListIsLoading,
  articlesListView,
} from '../../model/selectors/articlesList/articlesList';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import {
  articleListSelectors,
  articlesListActions,
  articlesListReducer,
} from '../../model/slice/articlesListSlice/articlesListSlice';

import { ArticleList, ArticleView } from 'entities/Article';
import { ArticleViewChanger } from 'features/ArticleViewChanger';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitEffect } from 'shared/lib/hooks/useInitEffect';
import { Page } from 'shared/ui';

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
    dispatch(articlesListActions.getInitView());
    dispatch(fetchArticles({ page: 1 }));
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

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        isLoading={isLoading}
        onScrollEnd={onLoadNewArticles}
        className={classNames(cls.articlesPage, [className], {})}
      >
        <ArticleViewChanger onViewClick={onChangeView} view={view} />
        <ArticleList articles={articles} isLoading={isLoading} view={view} error={error} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
