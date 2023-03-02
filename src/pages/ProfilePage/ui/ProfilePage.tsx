import { useTranslation } from 'react-i18next';

import cls from './ProfilePage.module.scss';

import { profileReducer } from 'entities/Profile';
import { classNames } from 'shared/lib';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('profile');

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.profilePage, [className], {})}>{t('profile')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
