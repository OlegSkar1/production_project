import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import cls from './ArticleDetailsPage.module.scss';

import { articleDetailsCommentsError, articleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

import { fetchArticleComments } from '../../model/services/fetchArticleComments/fetchArticleComments';

import { articleCommentReducer, articleCommentSelectors } from '../../model/slice/articleCommentSlice';

import { routePath } from 'app/providers/router/config/routeConfig';
import { ArticleDetails, getArticleError } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddNewCommentForm } from 'features/AddNewCommentForm';

import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitEffect } from 'shared/lib/hooks/useInitEffect';
import { AppLink, Text } from 'shared/ui';

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
  const commentsIsLoading = useSelector(articleDetailsCommentsIsLoading);
  const commentsError = useSelector(articleDetailsCommentsError);
  const articleError = useSelector(getArticleError);

  const dispatch = useAppDispatch();

  const onSendComment = useCallback(
    (text: string) => {
      console.log(text);
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  useInitEffect(() => {
    dispatch(fetchArticleComments(id));
  });

  if (!id) {
    return <div className={classNames(cls.articleDetailsPage, [className], {})}>{t('Article not found')}</div>;
  }

  if (commentsError) {
    return (
      <Text
        theme='error'
        className={classNames(cls.articleDetailsPage, [className], {})}
        text={t('Failed to post comment', { ns: 'translation' })}
      />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetailsPage, [className], {})}>
        <AppLink to={routePath.articles} className={cls.link} theme='outlined'>
          {t('back to list')}
        </AppLink>
        <ArticleDetails id={id} />
        {!articleError && (
          <>
            <AddNewCommentForm onSendComment={onSendComment} />
            <CommentList comments={comments} isLoading={commentsIsLoading} />
          </>
        )}
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
