import { useTranslation } from 'react-i18next';

import cls from './ProfileCard.module.scss';

import { Profile } from '../../model/types/profile';

import { classNames } from 'shared/lib';
import { Input, Loader, Text } from 'shared/ui';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirst?: (val: string) => void;
  onChangeLastName?: (val: string) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  const { className, data, isLoading, error, readonly, onChangeFirst, onChangeLastName } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.profileCard, [className, cls.loading], {})}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, [className, cls.error], {})}>
        <Text title={t('profile_title_error')} theme='error' text={t('profile_text_error')} align='center' />
      </div>
    );
  }

  return (
    <div className={classNames(cls.profileCard, [className], {})}>
      <div className={cls.data}>
        <Input readonly={readonly} value={data?.first} label={t('yourName')} onChange={onChangeFirst} />
        <Input readonly={readonly} value={data?.lastname} label={t('yourLastname')} onChange={onChangeLastName} />
      </div>
    </div>
  );
};
