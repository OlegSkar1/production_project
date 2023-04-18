import { memo } from 'react';

import { EditableProfileCard, ProfileHeader } from 'features/EditableProfileCard';
import { Page } from 'widgets/Page';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  return (
    <Page>
      <ProfileHeader />
      <EditableProfileCard />
    </Page>
  );
};

export default memo(ProfilePage);
