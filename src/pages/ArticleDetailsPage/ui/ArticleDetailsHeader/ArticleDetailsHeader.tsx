import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getUserIsEditArticle } from '@/entities/Article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, HStack } from '@/shared/ui';

interface ArticleDetailsHeaderProps {
  className?: string;
}

export const ArticleDetailsHeader: FC<ArticleDetailsHeaderProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();
  const isEdit = useSelector(getUserIsEditArticle);
  const { id } = useParams<{ id: string }>();

  return (
    <HStack justify='between' className={classNames('', [className], {})}>
      <AppLink to={__PROJECT__ !== 'storybook' ? getRouteArticles() : '#'} theme='outlined'>
        {t('back to list', { ns: 'articles' })}
      </AppLink>
      {isEdit && id && (
        <AppLink to={getRouteArticleEdit(id)} theme='outlined'>
          {t('Edit')}
        </AppLink>
      )}
    </HStack>
  );
});
