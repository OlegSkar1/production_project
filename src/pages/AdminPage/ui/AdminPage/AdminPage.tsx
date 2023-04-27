import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const AdminPage = () => {
  const { t } = useTranslation('admin');

  return <Page>{t('adminPage')}</Page>;
};

export default AdminPage;
