import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { articleDetailsCommentsIsLoading, articleDetailsCommentsError } from '../../model/selectors/comments/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchArticleComments } from '../../model/services/fetchArticleComments/fetchArticleComments';
import { articleCommentSelectors } from '../../model/slice/articleCommentSlice/articleCommentSlice';
import cls from '../ArticleDetailsPage/ArticleDetailsPage.module.scss';

import { CommentList } from '@/entities/Comment';
import { AddNewCommentForm } from '@/features/AddNewCommentForm';
import { classNames } from '@/shared/lib';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitEffect } from '@/shared/lib/hooks/useInitEffect';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import commentsCls from './ArticleDetailsComments.module.scss';

interface ArticleDetailsCommentsProps {
  className?: string;
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo((props) => {
  const { className } = props;
  const { id = '1' } = useParams<{ id: string }>();
  const { t } = useTranslation();

  const comments = useSelector(articleCommentSelectors.selectAll);
  const commentsIsLoading = useSelector(articleDetailsCommentsIsLoading);
  const commentsError = useSelector(articleDetailsCommentsError);

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

  return (
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <div className={classNames(cls.articleDetailsPage, [className], {})}>
          <AddNewCommentForm onSendComment={onSendComment} error={commentsError} />
          <CommentList comments={comments} isLoading={commentsIsLoading} />
        </div>
      }
      on={
        <VStack gap='16' align='start' className={classNames(commentsCls.articleDetailsComments, [className], {})}>
          <Text tagname='h2' title={t('Comments')} bold size='size_l' />
          <AddNewCommentForm onSendComment={onSendComment} error={commentsError} />
          <CommentList comments={comments} isLoading={commentsIsLoading} />
        </VStack>
      }
    />
  );
});
