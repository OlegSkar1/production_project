import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

import { EditableProfileCard, getProfileValidateErrors, ValidateProfileErrors } from 'features/EditableProfileCard';
import { Page, Text } from 'shared/ui';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const { t } = useTranslation('profile');

  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorsTranslates = {
    [ValidateProfileErrors.INCORRECT_DATA]: t('incorrect_data'),
    [ValidateProfileErrors.INCORRECT_AGE]: t('incorrect_age'),
    [ValidateProfileErrors.NO_DATA]: t('no_data'),
    [ValidateProfileErrors.SERVER_ERROR]: t('server_error'),
  };

  return (
    <Page>
      <ProfilePageHeader />
      {validateErrors?.length &&
        validateErrors.map((err) => <Text key={err} theme='error' text={validateErrorsTranslates[err]} />)}
      <EditableProfileCard />
    </Page>
  );
};

export default memo(ProfilePage);
