import { memo, useEffect } from 'react';

import { useEditableProfileCard } from '../../lib/hooks/useEditableProfileCard';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileCardReducer } from '../../model/slice/profileCardSlice';

import { EditableProfileCardDeprecated } from './EditableProfileCardDeprecated';
import { EditableProfileCardRedesigned } from './EditableProfileCardRedesigned';

import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

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

  useEffect(() => {
    if (id && __PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  const content = (
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <EditableProfileCardDeprecated
          canEditProfile={canEditProfile}
          className={className}
          data={data}
          error={error}
          isLoading={isLoading}
          onCancel={onCancel}
          onChangeAge={onChangeAge}
          onChangeAvatarLink={onChangeAvatarLink}
          onChangeCity={onChangeCity}
          onChangeCountry={onChangeCountry}
          onChangeCurrency={onChangeCurrency}
          onChangeFirst={onChangeFirst}
          onChangeLastName={onChangeLastName}
          onChangeUsername={onChangeUsername}
          onEdit={onEdit}
          onSave={onSave}
          readonly={readonly}
          validateErrors={validateErrors}
        />
      }
      on={
        <EditableProfileCardRedesigned
          canEditProfile={canEditProfile}
          className={className}
          data={data}
          error={error}
          isLoading={isLoading}
          onCancel={onCancel}
          onChangeAge={onChangeAge}
          onChangeAvatarLink={onChangeAvatarLink}
          onChangeCity={onChangeCity}
          onChangeCountry={onChangeCountry}
          onChangeCurrency={onChangeCurrency}
          onChangeFirst={onChangeFirst}
          onChangeLastName={onChangeLastName}
          onChangeUsername={onChangeUsername}
          onEdit={onEdit}
          onSave={onSave}
          readonly={readonly}
          validateErrors={validateErrors}
        />
      }
    />
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
});
