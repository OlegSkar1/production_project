import { FC, memo, useCallback } from 'react';

import { useSelector } from 'react-redux';

import cls from './ArticlesFilters.module.scss';

import { articlesListView } from '../../model/selectors/articlesList/articlesList';

import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';

import { articlesListActions } from '../../model/slice/articlesListSlice/articlesListSlice';

import { ArticleView } from 'entities/Article';
import { ArticlesPageSearch, ArticlesPageSort, ArticlesPageTabs } from 'features/ArticlePageFilter';
import { ArticleViewChanger } from 'features/ArticleViewChanger';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { HStack } from 'shared/ui';

interface ArticlesFiltersProps {
  className?: string;
}

export const ArticlesFilters: FC<ArticlesFiltersProps> = memo((props) => {
  const { className } = props;
  const dispatch = useAppDispatch();

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

  return (
    <div className={classNames('', [className], {})}>
      <HStack justify='between' className={cls.articlesHeaderWrapper}>
        <ArticlesPageSort onChangeSort={onChangeSort} />
        <ArticleViewChanger onViewClick={onChangeView} view={view} />
      </HStack>
      <ArticlesPageSearch onChangeSort={onChangeSort} className={cls.search} />
      <ArticlesPageTabs onTabClick={onChangeSort} className={cls.tabs} />
    </div>
  );
});
