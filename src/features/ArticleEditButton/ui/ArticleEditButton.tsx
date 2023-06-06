import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getUserIsEditArticle } from '@/entities/Article';
import { getRouteArticleEdit } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Button } from '@/shared/ui/redesigned/Button';

interface ArticleEditButtonProps {
  className?: string;
}

export const ArticleEditButton: React.FC<ArticleEditButtonProps> = memo((props) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  const { t } = useTranslation();
  const isEdit = useSelector(getUserIsEditArticle);

  if (!id) return null;

  if (!isEdit) return null;

  return (
    <AppLink to={getRouteArticleEdit(id)} className={className}>
      <Button variant='outlined'> {t('Edit')}</Button>
    </AppLink>
  );
});
