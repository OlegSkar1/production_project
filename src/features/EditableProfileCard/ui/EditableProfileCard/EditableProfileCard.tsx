import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileCardActions, profileCardReducer } from '../../model/slice/profileCardSlice';

import { ValidateProfileErrors } from '../../model/types/ProfileCardSchema';

import { ProfileHeader } from '../ProfileHeader/ProfileHeader';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from 'entities/Profile';

import { classNames } from 'shared/lib';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text } from 'shared/ui';

interface EditableProfileCardProps {
  className?: string;
  id: string | undefined;
}

const initialReducers: ReducersList = {
  profile: profileCardReducer,
};

export const EditableProfileCard: React.FC<EditableProfileCardProps> = memo((props) => {
  const { className, id } = props;

  const { t } = useTranslation('profile');

  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorsTranslates = {
    [ValidateProfileErrors.INCORRECT_DATA]: t('incorrect_data'),
    [ValidateProfileErrors.INCORRECT_AGE]: t('incorrect_age'),
    [ValidateProfileErrors.NO_DATA]: t('no_data'),
    [ValidateProfileErrors.SERVER_ERROR]: t('server_error'),
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id && __PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  const data = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  const onChangeFirst = useCallback(
    (value?: string) => {
      dispatch(profileCardActions.updateProfile({ first: value || '' }));
    },
    [dispatch]
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(profileCardActions.updateProfile({ lastname: value || '' }));
    },
    [dispatch]
  );
  const onChangeAge = useCallback(
    (value?: string) => {
      if (/^\d*$/g.test(value || '')) {
        dispatch(profileCardActions.updateProfile({ age: value || '' }));
      }
    },
    [dispatch]
  );
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileCardActions.updateProfile({ city: value || '' }));
    },
    [dispatch]
  );
  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileCardActions.updateProfile({ username: value || '' }));
    },
    [dispatch]
  );
  const onChangeAvatarLink = useCallback(
    (value?: string) => {
      dispatch(profileCardActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch]
  );
  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileCardActions.updateProfile({ currency }));
    },
    [dispatch]
  );
  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileCardActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
      <ProfileHeader />
      {validateErrors?.length &&
        validateErrors.map((err) => (
          <Text key={err} theme='error' text={validateErrorsTranslates[err]} data-testid='EditableProfileCard.Error' />
        ))}
      <ProfileCard
        className={classNames('', [className], {})}
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
    </DynamicModuleLoader>
  );
});
