import { FC, memo } from 'react';

import { useSelector } from 'react-redux';

import cls from './RecommendArticles.module.scss';

import {
  getRecommendArticleError,
  getRecommendArticleIsLoading,
} from '../../model/selectors/recommendArticleSelectors/recommendArticleSelectors';
import { fetchRecommendArticles } from '../../model/services/fetchRecommendArticles/fetchRecommendArticles';
import {
  recommendArticleSelectors,
  recommendArticlesReducer,
} from '../../model/slice/recommendArticleSlice/recommendArticleSlice';

import { ArticleList } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitEffect } from 'shared/lib/hooks/useInitEffect';

interface RecommendArticlesProps {
  className?: string;
}

const reducers: ReducersList = {
  recommendArticles: recommendArticlesReducer,
};

export const RecommendArticles: FC<RecommendArticlesProps> = memo((props) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const articles = useSelector(recommendArticleSelectors.selectAll);
  const isLoading = useSelector(getRecommendArticleIsLoading);
  const error = useSelector(getRecommendArticleError);

  useInitEffect(() => {
    dispatch(fetchRecommendArticles());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('', [className], {})}>
        <ArticleList articles={articles} error={error} isLoading={isLoading} className={cls.articles} target='_blank' />
      </div>
    </DynamicModuleLoader>
  );
});
