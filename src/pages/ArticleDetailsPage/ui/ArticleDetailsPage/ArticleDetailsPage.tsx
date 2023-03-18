import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import cls from './ArticleDetailsPage.module.scss';

import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { fetchArticleComments } from 'pages/ArticleDetailsPage/model/services/fetchArticleComments';
import {
  articleCommentReducer,
  articleCommentSelectors,
} from 'pages/ArticleDetailsPage/model/slice/atricleCommentSlice';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitEffect } from 'shared/lib/hooks/useInitEffect';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleComments: articleCommentReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('articles');
  const comments = useSelector(articleCommentSelectors.selectAll);
  const dispatch = useAppDispatch();

  useInitEffect(() => {
    dispatch(fetchArticleComments(id));
  });

  if (!id) {
    return <div className={classNames(cls.articleDetailsPage, [className], {})}>{t('Article not found')}</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetailsPage, [className], {})}>
        <ArticleDetails id={id} />
        <CommentList comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
