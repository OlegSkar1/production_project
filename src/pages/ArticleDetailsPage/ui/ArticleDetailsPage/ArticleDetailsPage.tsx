import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { articleDetailsCommentsError, articleDetailsCommentsIsLoading } from '../../model/selectors/comments/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchArticleComments } from '../../model/services/fetchArticleComments/fetchArticleComments';
import {
  articleCommentReducer,
  articleCommentSelectors,
} from '../../model/slice/articleCommentSlice/articleCommentSlice';
import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader';

import { ArticleDetails, getArticleError } from '@/entities/Article';
import { CommentList } from '@/entities/Comment';
import { AddNewCommentForm } from '@/features/AddNewCommentForm';
import { ArticleRateCard } from '@/features/ArticleRateCard';
import { RecommendArticles } from '@/features/RecommendArticles';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitEffect } from '@/shared/lib/hooks/useInitEffect';
import { Page } from '@/widgets/Page';

import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleComments: articleCommentReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { id = '1' } = useParams<{ id: string }>();
  const { t } = useTranslation('articles');

  const comments = useSelector(articleCommentSelectors.selectAll);
  const commentsIsLoading = useSelector(articleDetailsCommentsIsLoading);
  const commentsError = useSelector(articleDetailsCommentsError);
  const articleError = useSelector(getArticleError);

  const dispatch = useAppDispatch();

  const onSendComment = useCallback(
    (text: string) => {
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

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page data-testid='ArticleDetailsPage' className={classNames(cls.articleDetailsPage, [className], {})}>
        <ArticleDetailsHeader />
        <ArticleDetails id={id} />
        {!articleError && (
          <>
            <ArticleRateCard articleId={id} />
            <RecommendArticles />
            <AddNewCommentForm onSendComment={onSendComment} error={commentsError} />
            <CommentList comments={comments} isLoading={commentsIsLoading} />
          </>
        )}
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
