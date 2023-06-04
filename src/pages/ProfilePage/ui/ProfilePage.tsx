import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard, useEditableProfileCard } from '@/features/EditableProfileCard';
import { ProfileRateCard } from '@/features/ProfileRateCard';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Page } from '@/widgets/Page';

import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ className }) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('profile');
  const { error } = useEditableProfileCard();

  if (!id) {
    return <div className={className}>{t('Profile not found')}</div>;
  }

  return (
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <Page data-testid='ProfilePage'>
          <VStack gap='16' align='normal'>
            <EditableProfileCard id={id} />
            <ProfileRateCard profileId={id} />
          </VStack>
        </Page>
      }
      on={
        <Page data-testid='ProfilePage' className={cls.profilePageRedesigned}>
          <VStack gap='16' justify='center'>
            <EditableProfileCard id={id} />
            <ProfileRateCard profileId={id} error={error} />
          </VStack>
        </Page>
      }
    />
  );
};

export default memo(ProfilePage);
