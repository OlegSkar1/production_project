import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import cls from './ProfileCard.module.scss';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';

import { classNames } from 'shared/lib';
import { Button, Input, Text } from 'shared/ui';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.profileCard, [className], {})}>
      <div className={cls.header}>
        <Text title={t('profile')} />
        <Button disabled={isLoading} variant='outlined'>
          {t('edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input value={data?.first} label={t('yourName')} />
        <Input value={data?.lastname} label={t('yourLastname')} />
      </div>
    </div>
  );
};
