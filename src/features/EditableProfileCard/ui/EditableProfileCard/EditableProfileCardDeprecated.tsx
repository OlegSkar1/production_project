import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ValidateProfileErrors } from '../../model/consts/consts';
import { ProfileHeader, ProfileHeaderProps } from '../ProfileHeader/ProfileHeader';

import { ProfileCard, ProfileCardProps } from '@/entities/Profile';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ValidateErrors {
  validateErrors?: ValidateProfileErrors[];
}

type EditableProfileCardProps = ProfileHeaderProps & ProfileCardProps & ValidateErrors;

export const EditableProfileCardDeprecated: React.FC<EditableProfileCardProps> = memo((props) => {
  const {
    className,
    canEditProfile,
    data,
    error,
    isLoading,
    onCancel,
    onChangeAge,
    onChangeAvatarLink,
    onChangeCity,
    onChangeCountry,
    onChangeCurrency,
    onChangeFirst,
    onChangeLastName,
    onChangeUsername,
    onEdit,
    onSave,
    readonly,
    validateErrors,
  } = props;

  const { t } = useTranslation('profile');

  const validateErrorsTranslates = {
    [ValidateProfileErrors.INCORRECT_DATA]: t('incorrect_data'),
    [ValidateProfileErrors.INCORRECT_AGE]: t('incorrect_age'),
    [ValidateProfileErrors.NO_DATA]: t('no_data'),
    [ValidateProfileErrors.SERVER_ERROR]: t('server_error'),
  };

  return (
    <VStack gap='8' align='normal'>
      <ProfileHeader
        className={className}
        readonly={readonly}
        canEditProfile={canEditProfile}
        onEdit={onEdit}
        onSave={onSave}
        onCancel={onCancel}
      />
      {validateErrors?.length &&
        validateErrors.map((err) => (
          <TextDeprecated
            key={err}
            theme='error'
            text={validateErrorsTranslates[err]}
            data-testid='EditableProfileCard.Error'
          />
        ))}
      <ProfileCard
        className={className}
        data={data}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirst={onChangeFirst}
        onChangeLastName={onChangeLastName}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeAvatarLink={onChangeAvatarLink}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </VStack>
  );
});
