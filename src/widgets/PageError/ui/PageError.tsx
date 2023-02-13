import { useTranslation } from 'react-i18next';

import cls from './PageError.module.scss';

import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';

interface PageErrorProps {
  className?: string;
}

export const PageError: React.FC<PageErrorProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const updateHandler = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p style={{ fontWeight: 'bold' }}>{t('error')}</p>
      <Button onClick={updateHandler}>{t('update-page')}</Button>
    </div>
  );
};
