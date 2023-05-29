import { useTranslation } from 'react-i18next';

import { ProfileCardProps } from '../ProfileCard/ProfileCard';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

export const ProfileCardRedesigned: React.FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
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

  if (error) {
    return (
      <VStack justify='center' className={className}>
        <Text title={t('profile_title_error')} theme='error' text={t('profile_text_error')} align='center' />
      </VStack>
    );
  }

  return (
    <HStack tagname='article' gap='24' justify='center' max>
      <VStack gap='16' align='start' max>
        <Input
          readonly={readonly}
          value={data?.first}
          label={t('yourName')}
          onChange={onChangeFirst}
          data-testid='ProfileCardRedesigned.first'
        />
        <Input
          readonly={readonly}
          value={data?.lastname}
          label={t('yourLastname')}
          onChange={onChangeLastName}
          data-testid='ProfileCardRedesigned.lastname'
        />
        <Input readonly={readonly} value={data?.age} label={t('yourAge')} onChange={onChangeAge} />
        <Input readonly={readonly} value={data?.city} label={t('yourCity')} onChange={onChangeCity} />
      </VStack>
      <VStack gap='16' align='start' max>
        <Input readonly={readonly} value={data?.username} label={t('yourUsername')} onChange={onChangeUsername} />
        <Input readonly={readonly} value={data?.avatar} label={t('avatar_path')} onChange={onChangeAvatarLink} />
        <CurrencySelect onChange={onChangeCurrency} readonly={readonly} value={data?.currency} />
        <CountrySelect onChange={onChangeCountry} readonly={readonly} value={data?.country} />
      </VStack>
    </HStack>
  );
};
