import { memo } from 'react';

import { useParams } from 'react-router-dom';

import { EditableProfileCard } from 'features/EditableProfileCard';
import { Page } from 'widgets/Page';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <Page>
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default memo(ProfilePage);
