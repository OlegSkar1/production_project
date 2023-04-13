import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import { generatePath, useParams } from 'react-router-dom';

import { routePath } from 'app/providers/router/config/routeConfig';
import { getUserIsEditArticle } from 'entities/Article/model/selectors/getUserIsEditArticle/getUserIsEditArticle';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, HStack } from 'shared/ui';

interface ArticleDetailsHeaderProps {
  className?: string;
}

export const ArticleDetailsHeader: FC<ArticleDetailsHeaderProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();
  const isEdit = useSelector(getUserIsEditArticle);
  const { id } = useParams<{ id: string }>();

  const pathToEditArticle = generatePath(routePath.article_edit, { id });

  return (
    <HStack justify='between' className={classNames('', [className], {})}>
      <AppLink to={routePath.articles} theme='outlined'>
        {t('back to list', { ns: 'articles' })}
      </AppLink>
      {isEdit && (
        <AppLink to={pathToEditArticle} theme='outlined'>
          {t('Edit')}
        </AppLink>
      )}
    </HStack>
  );
});
