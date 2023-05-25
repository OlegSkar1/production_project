import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/EditableProfileCard';
import { ProfileRateCard } from '@/features/ProfileRateCard';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ className }) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('profile');

  if (!id) {
    return <div className={className}>{t('Profile not found')}</div>;
  }

  return (
    <Page data-testid='ProfilePage'>
      <VStack gap='16' align='normal'>
        <EditableProfileCard id={id} />
        <ProfileRateCard profileId={id} />
      </VStack>
    </Page>
  );
};

export default memo(ProfilePage);
