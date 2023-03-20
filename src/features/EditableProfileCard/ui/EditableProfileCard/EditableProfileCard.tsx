import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import cls from './EditableProfileCard.module.scss';

import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileCardActions, profileCardReducer } from '../../model/slice/profileCardSlice';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from 'entities/Profile';
import { classNames } from 'shared/lib';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitEffect } from 'shared/lib/hooks/useInitEffect';

interface EditableProfileCardProps {
  className?: string;
}

const initialReducers: ReducersList = {
  profile: profileCardReducer,
};

export const EditableProfileCard: React.FC<EditableProfileCardProps> = memo((props) => {
  const { className } = props;

  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  useInitEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

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
      <div className={classNames(cls.editableProfileCard, [className], {})}>
        <ProfileCard
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
      </div>
    </DynamicModuleLoader>
  );
});
