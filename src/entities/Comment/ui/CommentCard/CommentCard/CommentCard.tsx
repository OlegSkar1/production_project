import { FC } from 'react';

import cls from './CommentCard.module.scss';

import { Comment } from '../../../model/types/comment';

import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar, Skeleton, Text } from 'shared/ui';

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = (props) => {
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

  return (
    <div className={classNames(cls.commentCard, [className], {})}>
      <div className={cls.userWrapper}>
        {comment.user.avatar ? <Avatar src={comment.user.avatar} alt={comment.user.username} size={30} /> : null}
        <Text title={comment.user.username} />
      </div>
      <Text text={comment.text} />
    </div>
  );
};
