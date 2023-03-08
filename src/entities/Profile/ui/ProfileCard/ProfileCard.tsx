import { useTranslation } from 'react-i18next';

import cls from './ProfileCard.module.scss';

import { Profile } from '../../model/types/profile';

import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { classNames } from 'shared/lib';
import { Input, Loader, Text } from 'shared/ui';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirst?: (val: string) => void;
  onChangeLastName?: (val: string) => void;
  onChangeAge?: (val: string) => void;
  onChangeCity?: (val: string) => void;
  onChangeUsername?: (val: string) => void;
  onChangeAvatarLink?: (val: string) => void;
  onChangeCurrency?: (val: Currency) => void;
  onChangeCountry?: (val: Country) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirst,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatarLink,
    onChangeCurrency,
    onChangeCountry,
  } = props;

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
    <div className={classNames(cls.profileCard, [className], { [cls.editable]: !readonly })}>
      <div className={cls.data}>
        {data?.avatar && <Avatar src={data.avatar} alt={t('avatar', { ns: 'translation' })} />}
        <Input variant='clear' readonly={readonly} value={data?.first} label={t('yourName')} onChange={onChangeFirst} />
        <Input
          variant='clear'
          readonly={readonly}
          value={data?.lastname}
          label={t('yourLastname')}
          onChange={onChangeLastName}
        />
        <Input variant='clear' readonly={readonly} value={data?.age} label={t('yourAge')} onChange={onChangeAge} />
        <Input variant='clear' readonly={readonly} value={data?.city} label={t('yourCity')} onChange={onChangeCity} />
        <Input
          variant='clear'
          readonly={readonly}
          value={data?.username}
          label={t('yourUsername')}
          onChange={onChangeUsername}
        />
        <Input
          variant='clear'
          readonly={readonly}
          value={data?.avatar}
          label={t('avatar_path')}
          onChange={onChangeAvatarLink}
        />
        <CurrencySelect onChange={onChangeCurrency} readonly={readonly} value={data?.currency} />
        <CountrySelect onChange={onChangeCountry} readonly={readonly} value={data?.country} />
      </div>
    </div>
  );
};
