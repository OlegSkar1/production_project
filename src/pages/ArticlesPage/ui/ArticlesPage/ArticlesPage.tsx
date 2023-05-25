import { FC, memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { articlesListError, articlesListIsLoading } from '../../model/selectors/articlesList/articlesList';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initedFetchArticles } from '../../model/services/initedFetchArticles/initedFetchArticles';
import { articlesListReducer } from '../../model/slice/articlesListSlice/articlesListSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesFilters } from '../ArticlesFilters/ArticlesFilters';

import { ArticleGreeting } from '@/features/ArticleGreeting';
import { getOrder, getSearch, getSort, getTab } from '@/features/ArticlePageFilter';
import { StickyContentLayout } from '@/shared/layouts';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitEffect } from '@/shared/lib/hooks/useInitEffect';
import { Page } from '@/widgets/Page';

import cls from './ArticlesPage.module.scss';

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

  const isLoading = useSelector(articlesListIsLoading);
  const error = useSelector(articlesListError);

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

  const onLoadNewArticles = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      if (error) {
        return false;
      }
      dispatch(fetchNextArticlesPage());
    }
  }, [dispatch, error]);

  const content = (
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <Page
          data-testid='ArticlesPage'
          isLoading={isLoading}
          onScrollEnd={onLoadNewArticles}
          className={classNames(cls.articlesPage, [className], {})}
        >
          <ArticlesFilters />
          <ArticleInfiniteList />
          <ArticleGreeting />
        </Page>
      }
      on={
        <StickyContentLayout
          left={<div>214336</div>}
          right={<div>214336</div>}
          content={
            <Page
              data-testid='ArticlesPage'
              isLoading={isLoading}
              onScrollEnd={onLoadNewArticles}
              className={classNames(cls.articlesPage, [className], {})}
            >
              <ArticleInfiniteList />
            </Page>
          }
        />
      }
    />
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
