import { useTranslation } from 'react-i18next';

import { BugButton } from 'app/providers/errorBoundary/ui/BugButton';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <BugButton />
      {t('main')}
    </div>
  );
};

export default MainPage;
