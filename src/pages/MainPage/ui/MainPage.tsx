import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from 'shared/ui';

const MainPage = () => {
  const { t } = useTranslation('main');

  return <Page>{t('main')}</Page>;
};

export default memo(MainPage);
