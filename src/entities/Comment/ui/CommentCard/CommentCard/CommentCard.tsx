import { FC, memo } from 'react';

import cls from './CommentCard.module.scss';

import { Comment } from '../../../model/types/comment';

import { routePath } from 'app/providers/router/config/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, Avatar, Skeleton, Text } from 'shared/ui';

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
        <div className={cls.userWrapper}>
          <Skeleton variant='circle' width={30} height={30} />
          <Skeleton variant='title' />
        </div>
        <Skeleton variant='text' height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <article className={classNames(cls.commentCard, [className], {})}>
      <AppLink to={`${routePath.profile}${comment.user.id}`} className={cls.userWrapper}>
        {comment.user.avatar ? <Avatar src={comment.user.avatar} alt={comment.user.username} size={30} /> : null}
        <Text title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} />
    </article>
  );
});
