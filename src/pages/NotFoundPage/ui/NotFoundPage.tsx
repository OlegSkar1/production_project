import { useTranslation } from 'react-i18next';

import cls from './NotFoundPage.module.scss';

import { classNames } from 'shared/lib';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={classNames(cls.notFoundPage, {}, [className])}>{t('not-found-page')}</div>;
};
