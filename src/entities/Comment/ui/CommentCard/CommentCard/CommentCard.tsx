import { FC, memo } from 'react';

import { generatePath } from 'react-router-dom';

import cls from './CommentCard.module.scss';

import { Comment } from '../../../model/types/comment';

import { routePath } from '@/app/providers/router/config/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, Avatar, HStack, Skeleton, Text } from '@/shared/ui';

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

  const pathToProfile = generatePath(routePath.profile, { id: comment.user.id });

  return (
    <article className={classNames(cls.commentCard, [className], {})}>
      <AppLink to={pathToProfile}>
        <HStack gap='8' className={cls.userWrapper}>
          {comment.user.avatar ? <Avatar src={comment.user.avatar} alt={comment.user.username} size={30} /> : null}
          <Text text={comment.user.username} size='size_l' />
        </HStack>
      </AppLink>
      <Text text={comment.text} />
    </article>
  );
});
