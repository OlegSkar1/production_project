import { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { getArticleData } from '../../model/selectors/getArticleData/getArticleData';
import { getArticleError } from '../../model/selectors/getArticleError/getArticleError';
import { getArticleIsLoading } from '../../model/selectors/getArticleIsLoading/getArticleIsLoading';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleReducer } from '../../model/slice/articleSlice';
import { ArticleDetailsDeprecated } from '../ArticleDetailsDeprecated/ArticleDetailsDeprecated';
import { ArticleDetailsRedesigned } from '../ArticleDetailsRedesigned/ArticleDetailsRedesigned';

import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitEffect } from '@/shared/lib/hooks/useInitEffect';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const initialReducers: ReducersList = {
  article: articleReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
  const { className, id } = props;
  const dispatch = useAppDispatch();

  const loading = useSelector(getArticleIsLoading);
  const error = useSelector(getArticleError);
  const article = useSelector(getArticleData);

  useInitEffect(() => {
    dispatch(fetchArticleById(id));
  });

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <ToggleFeature
        name='isAppRedesigned'
        off={<ArticleDetailsDeprecated className={className} loading={loading} error={error} article={article} />}
        on={<ArticleDetailsRedesigned className={className} loading={loading} error={error} article={article} />}
      />
    </DynamicModuleLoader>
  );
});
