import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useEditableProfileCard } from '../../lib/hooks/useEditableProfileCard';
import { ValidateProfileErrors } from '../../model/consts/consts';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileCardReducer } from '../../model/slice/profileCardSlice';
import { ProfileHeader } from '../ProfileHeader/ProfileHeader';

import { ProfileCard } from '@/entities/Profile';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface EditableProfileCardProps {
  className?: string;
  id: string | undefined;
}

const initialReducers: ReducersList = {
  profile: profileCardReducer,
};

export const EditableProfileCard: React.FC<EditableProfileCardProps> = memo((props) => {
  const { className, id } = props;

  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');

  const {
    data,
    error,
    isLoading,
    onChangeAge,
    onChangeAvatarLink,
    onChangeCity,
    onChangeCountry,
    onChangeCurrency,
    onChangeFirst,
    onChangeLastName,
    onChangeUsername,
    readonly,
    validateErrors,
    canEditProfile,
    onCancel,
    onEdit,
    onSave,
  } = useEditableProfileCard();

  const validateErrorsTranslates = {
    [ValidateProfileErrors.INCORRECT_DATA]: t('incorrect_data'),
    [ValidateProfileErrors.INCORRECT_AGE]: t('incorrect_age'),
    [ValidateProfileErrors.NO_DATA]: t('no_data'),
    [ValidateProfileErrors.SERVER_ERROR]: t('server_error'),
  };

  useEffect(() => {
    if (id && __PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  const content = (
    <ToggleFeature
      name='isAppRedesigned'
      off={
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
      }
      on={
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
      }
    />
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
});
