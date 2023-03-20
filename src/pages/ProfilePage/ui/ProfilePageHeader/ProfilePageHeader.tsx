import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import cls from './ProfilePageHeader.module.scss';

import { getUserAuthData } from 'entities/User';
import { getProfileData, updateProfileData } from 'features/EditableProfileCard';
import { getProfileReadonly } from 'features/EditableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly';
import { profileCardActions } from 'features/EditableProfileCard/model/slice/profileCardSlice';
import { classNames } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, Text } from 'shared/ui';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id === profileData?.id;

  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

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

  return (
    <div className={classNames(cls.profilePageHeader, [className], {})}>
      <Text title={t('profile')} />
      {canEdit && (
        <div className='btnWrapper'>
          {readonly ? (
            <Button variant='outlined' onClick={onEdit}>
              {t('edit')}
            </Button>
          ) : (
            <div className={cls.headerBtns}>
              <Button variant='outlined' onClick={onSave}>
                {t('save')}
              </Button>
              <Button variant='ontlinedRed' onClick={onCancel}>
                {t('cancel')}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
});
