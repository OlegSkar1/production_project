import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticleDetails.module.scss';

import { fetchArticleById } from '../../model/services/fetchArticleById';

import { articleReducer } from '../../model/slice/articleSlice';

import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

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

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetails, [className], {})}></div>
    </DynamicModuleLoader>
  );
});
