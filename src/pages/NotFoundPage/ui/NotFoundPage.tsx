import { useTranslation } from 'react-i18next';

import cls from './NotFoundPage.module.scss';

import { classNames } from '@/shared/lib';
import { Page } from '@/widgets/Page';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return <Page className={classNames(cls.notFoundPage, [className], {})}>{t('not-found-page')}</Page>;
};
