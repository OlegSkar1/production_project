import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import { generatePath, useParams } from 'react-router-dom';

import cls from './ArticleDetailsHeader.module.scss';

import { getUserIsEditArticle } from '../../model/selectors/getUserIsEditArticle/getUserIsEditArticle';

import { routePath } from 'app/providers/router/config/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';

interface ArticleDetailsHeaderProps {
  className?: string;
}

export const ArticleDetailsHeader: FC<ArticleDetailsHeaderProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const isEdit = useSelector(getUserIsEditArticle);
  const { id } = useParams<{ id: string }>();

  const pathToEditArticle = generatePath(routePath.article_edit, { id });

  return (
    <div className={classNames(cls.articleDetailsHeader, [className], {})}>
      <AppLink to={routePath.articles} theme='outlined'>
        {t('back to list', { ns: 'articles' })}
      </AppLink>
      {isEdit && (
        <AppLink to={pathToEditArticle} theme='outlined'>
          {t('Edit')}
        </AppLink>
      )}
    </div>
  );
};
