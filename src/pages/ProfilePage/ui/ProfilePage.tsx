import { useEffect } from 'react';

import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { classNames } from 'shared/lib';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', [className], {})}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
