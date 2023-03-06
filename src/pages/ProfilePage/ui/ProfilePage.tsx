import { useEffect } from 'react';

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

import { EditableProfileCard, fetchProfileData } from 'features/EditableProfileCard';

import { classNames } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div className={classNames('', [className], {})}>
      <ProfilePageHeader />
      <EditableProfileCard />
    </div>
  );
};

export default ProfilePage;
