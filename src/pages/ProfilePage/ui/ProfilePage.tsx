import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

import { EditableProfileCard } from 'features/EditableProfileCard';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  return (
    <>
      <ProfilePageHeader />
      <EditableProfileCard />
    </>
  );
};

export default ProfilePage;
