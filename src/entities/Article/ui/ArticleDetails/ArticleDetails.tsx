import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import cls from './ArticleDetails.module.scss';

import { fetchArticleById } from '../../model/services/fetchArticleById';

import { articleReducer } from '../../model/slice/articleSlice';

import { getArticleData } from 'entities/Article/model/selectors/getArticleData/getArticleData';
import { getArticleError } from 'entities/Article/model/selectors/getArticleError/getArticleError';
import { getArticleIsLoading } from 'entities/Article/model/selectors/getArticleIsLoading/getArticleIsLoading';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Skeleton, Text } from 'shared/ui';

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

  const { t } = useTranslation('articles');

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (loading) {
    content = (
      <div className={cls.skeletonWrapper}>
        <Skeleton variant='circle' />
        <Skeleton variant='title' />
        <Skeleton variant='text' />
        <Skeleton variant='text' />
        <Skeleton variant='text' />
        <Skeleton variant='text' />
        <Skeleton variant='text' />
        <Skeleton variant='text' height={50} />
        <Skeleton variant='text' height={150} />
      </div>
    );
  } else if (error) {
    content = <Text align='center' title={t('an error occurred while loading the article')} />;
  } else {
    content = <div>article details</div>;
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetails, [className], {})}>{content}</div>
    </DynamicModuleLoader>
  );
});
