import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ValidateProfileErrors } from '../../model/consts/consts';
import { ProfileHeader, ProfileHeaderProps } from '../ProfileHeader/ProfileHeader';
import headerCls from '../ProfileHeader/ProfileHeader.module.scss';

import { ProfileCard, ProfileCardProps, ProfileCardSkeleton } from '@/entities/Profile';
import { classNames } from '@/shared/lib';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ValidateErrors {
  validateErrors?: ValidateProfileErrors[];
}

type EditableProfileCardProps = ProfileHeaderProps & ProfileCardProps & ValidateErrors;

export const EditableProfileCardRedesigned: FC<EditableProfileCardProps> = memo((props) => {
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

  if (isLoading) {
    return (
      <Card max>
        <VStack gap='16' align='normal'>
          <Skeleton
            variant='circle'
            width={128}
            height={128}
            className={classNames(headerCls.profileHeaderRedesigned, [headerCls.margin, className], {})}
          />
          <ProfileCardSkeleton />
        </VStack>
      </Card>
    );
  }

  return (
    <Card max>
      <VStack gap='16' align='normal'>
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <Text
              key={err}
              theme='error'
              text={validateErrorsTranslates[err]}
              data-testid='EditableProfileCard.Error'
            />
          ))}
        <ProfileHeader
          className={className}
          readonly={readonly}
          canEditProfile={canEditProfile}
          isLoading={isLoading}
          onEdit={onEdit}
          onSave={onSave}
          onCancel={onCancel}
          data={data}
        />
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
    </Card>
  );
});
