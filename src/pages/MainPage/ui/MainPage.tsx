import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { StarRating } from '@/shared/ui';
import { Page } from '@/widgets/Page';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page>
      {t('main')}
      <StarRating size={50} />
    </Page>
  );
};

export default memo(MainPage);
