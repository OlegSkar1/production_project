import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './CommentList.module.scss';

import { Comment } from '../../../model/types/comment';

import { CommentCard } from '../../CommentCard/CommentCard/CommentCard';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = (props) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.commentList, [className], {})}>
      {comments?.length ? (
        <>
          <Text title={t('Comments')} className={cls.commentsTitle} />
          {comments?.map((comment) => (
            <CommentCard isLoading={isLoading} key={comment.id} comment={comment} className={cls.commentCard} />
          ))}
        </>
      ) : (
        <Text title={t('Comments not found')} />
      )}
    </div>
  );
};
