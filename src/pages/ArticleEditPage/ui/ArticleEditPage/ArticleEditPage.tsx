import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  return (
    <Page data-testid={id ? 'ArticleEditPage' : 'ArticleCreatePage'} className={classNames('', [className], {})}>
      {id ? t('article.edit') + id : t('article.create')}
    </Page>
  );
};

export default memo(ArticleEditPage);
