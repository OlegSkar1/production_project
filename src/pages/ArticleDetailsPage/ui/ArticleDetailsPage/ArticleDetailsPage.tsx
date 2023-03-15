import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useParams } from 'react-router-dom';

import cls from './ArticleDetailsPage.module.scss';

import { ArticleDetails } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('articles');

  if (!id) {
    return <div className={classNames(cls.articleDetailsPage, [className], {})}>{t('Article not found')}</div>;
  }

  return (
    <div className={classNames(cls.articleDetailsPage, [className], {})}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);