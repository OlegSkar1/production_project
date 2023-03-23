/* eslint-disable max-len */
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import cls from './ArticlesPage.module.scss';

import { Article, ArticleList } from 'entities/Article';
import {
  articlesListError,
  articlesListIsLoading,
  articlesListView,
} from 'pages/ArticlesPage/model/selectors/articlesList/articlesList';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles';
import { articleListSelectors, articlesListReducer } from 'pages/ArticlesPage/model/slice/articlesListSlice';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitEffect } from 'shared/lib/hooks/useInitEffect';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesList: articlesListReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('articles');

  const dispatch = useAppDispatch();

  const articles = useSelector(articleListSelectors.selectAll);
  const isLoading = useSelector(articlesListIsLoading);
  const error = useSelector(articlesListError);
  const view = useSelector(articlesListView);

  useInitEffect(() => {
    dispatch(fetchArticles());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.articlesPage, [className], {})}>
        <ArticleList articles={articles} isLoading={isLoading} view={view} error={error} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
