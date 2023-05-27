import { useTranslation } from 'react-i18next';

import { ProfileCardProps } from '../ProfileCard/ProfileCard';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib';
import { Input, Loader } from '@/shared/ui';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ProfileCardDeprecated.module.scss';

export const ProfileCardDeprecated: React.FC<ProfileCardProps> = (props) => {
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
      <HStack justify='center' className={classNames(cls.profileCardDeprecated, [className, cls.loading], {})}>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <VStack justify='center' className={classNames(cls.profileCardDeprecated, [className, cls.error], {})}>
        <TextDeprecated title={t('profile_title_error')} theme='error' text={t('profile_text_error')} align='center' />
      </VStack>
    );
  }

  return (
    <VStack
      tagname='article'
      gap='16'
      align='normal'
      className={classNames(cls.profileCardDeprecated, [className], { [cls.editable]: !readonly })}
    >
      {data?.avatar && <Avatar size={100} src={data.avatar} alt={t('avatar', { ns: 'translation' })} />}
      <Input
        variant='clear'
        readonly={readonly}
        value={data?.first}
        label={t('yourName')}
        onChange={onChangeFirst}
        data-testid='ProfileCardDeprecated.first'
      />
      <Input
        variant='clear'
        readonly={readonly}
        value={data?.lastname}
        label={t('yourLastname')}
        onChange={onChangeLastName}
        data-testid='ProfileCardDeprecated.lastname'
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
    </VStack>
  );
};
