import { FC, memo } from 'react';

import { Comment } from '../../../model/types/comment';

import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, Avatar, HStack, Skeleton, Text } from '@/shared/ui';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, [className], {})}>
        <HStack gap='8' align='end' className={cls.userWrapper}>
          <Skeleton variant='circle' width={30} height={30} />
          <Skeleton variant='title' />
        </HStack>
        <Skeleton variant='text' height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <article className={classNames(cls.commentCard, [className], {})} data-testid={`CommentCard.${comment.text}`}>
      <AppLink to={getRouteProfile(comment.user.id)}>
        <HStack gap='8' className={cls.userWrapper}>
          {comment.user.avatar ? <Avatar src={comment.user.avatar} alt={comment.user.username} size={30} /> : null}
          <Text text={comment.user.username} size='size_l' />
        </HStack>
      </AppLink>
      <Text text={comment.text} />
    </article>
  );
});
