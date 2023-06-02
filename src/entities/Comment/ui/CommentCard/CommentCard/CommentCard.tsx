import { FC, memo } from 'react';

import { Comment } from '../../../model/types/comment';

import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

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
      <ToggleFeature
        name='isAppRedesigned'
        off={
          <div className={classNames(cls.commentCard, [className], {})}>
            <HStack gap='8' align='end' className={cls.userWrapper}>
              <SkeletonDeprecated variant='circle' width={30} height={30} />
              <SkeletonDeprecated variant='title' />
            </HStack>
            <SkeletonDeprecated variant='text' height={50} />
          </div>
        }
        on={
          <VStack max gap='4' align='start'>
            <HStack gap='8' align='center' className={cls.userWrapper}>
              <Skeleton variant='circle' width={32} height={32} />
              <Skeleton variant='text' width={50} />
            </HStack>
            <Skeleton variant='text' height={50} />
          </VStack>
        }
      />
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <article className={classNames(cls.commentCard, [className], {})} data-testid={`CommentCard.${comment.text}`}>
          <AppLinkDeprecated to={getRouteProfile(comment.user.id)}>
            <HStack gap='8' className={cls.userWrapper}>
              {comment.user.avatar ? <Avatar src={comment.user.avatar} alt={comment.user.username} size={30} /> : null}
              <TextDeprecated text={comment.user.username} size='size_l' />
            </HStack>
          </AppLinkDeprecated>
          <TextDeprecated text={comment.text} />
        </article>
      }
      on={
        <VStack max gap='4' align='start' data-testid={`CommentCard.${comment.text}`}>
          <AppLink to={getRouteProfile(comment.user.id)}>
            <HStack gap='8'>
              {comment.user.avatar ? <Avatar src={comment.user.avatar} alt={comment.user.username} size={32} /> : null}
              <Text text={comment.user.username} bold />
            </HStack>
          </AppLink>
          <Text text={comment.text} />
        </VStack>
      }
    />
  );
});
