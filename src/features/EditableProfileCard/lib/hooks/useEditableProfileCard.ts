import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { canEdit } from '../../model/selectors/canEdit/canEdit';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileCardActions } from '../../model/slice/profileCardSlice';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

export function useEditableProfileCard() {
  const dispatch = useAppDispatch();

  const validateErrors = useSelector(getProfileValidateErrors);
  const data = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const canEditProfile = useSelector(canEdit);

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

  const onEdit = useCallback(() => {
    dispatch(profileCardActions.setReadonly(false));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(profileCardActions.setCancel());
    }
    dispatch(profileCardActions.setReadonly(true));
  }, [dispatch]);

  const onSave = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(updateProfileData());
    }
  }, [dispatch]);

  return {
    validateErrors,
    data,
    isLoading,
    error,
    readonly,
    canEditProfile,
    onChangeFirst,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatarLink,
    onChangeCurrency,
    onChangeCountry,
    onEdit,
    onCancel,
    onSave,
  };
}
