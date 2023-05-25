import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Comment } from '../../../model/types/comment';
import { CommentCard } from '../../CommentCard/CommentCard/CommentCard';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo((props) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack gap='8' align='normal' className={classNames('', [className], {})} data-testid='CommentList.Loading'>
        <CommentCard isLoading className={cls.loading} />
        <CommentCard isLoading className={cls.loading} />
        <CommentCard isLoading className={cls.loading} />
      </VStack>
    );
  }

  return (
    <VStack gap='8' align='normal' className={classNames('', [className], {})} data-testid='CommentList'>
      {comments?.length ? (
        comments?.map((comment) => <CommentCard isLoading={isLoading} key={comment.id} comment={comment} />)
      ) : (
        <TextDeprecated title={t('Comments not found')} />
      )}
    </VStack>
  );
});
